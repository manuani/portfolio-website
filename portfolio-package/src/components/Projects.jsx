import React from 'react';
import { ExternalLink, Github, Calendar, Award } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Major Initiatives</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformational projects that delivered significant business impact and technological advancement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-medium text-lg">{project.company}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                {project.status && (
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {project.status}
                  </span>
                )}
              </div>

              {/* Project Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Achievements */}
              {project.achievements && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-4 h-4 text-blue-600 mr-2" />
                    Key Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-600">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 hover:border-blue-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex space-x-4 pt-4 border-t border-gray-200">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  )}
                </div>
              )}

              {/* Impact Metrics */}
              {project.metrics && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Technology?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can apply proven transformation strategies to accelerate your business growth and innovation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              Start a Conversation
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;