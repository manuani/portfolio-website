import React from 'react';
import { Calendar, MapPin, Building, GraduationCap, Award } from 'lucide-react';
import { experiences, education, certifications } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two decades of technology leadership driving transformation across Fortune 500 companies
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <Building className="w-6 h-6 text-blue-600 mr-3" />
            Professional Experience
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-1/2'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:items-start mb-4">
                      <div className="flex items-center text-blue-600 text-sm font-medium mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h4>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                        {exp.location && (
                          <>
                            <MapPin className="w-4 h-4 ml-4 mr-2" />
                            <span>{exp.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    {exp.achievements && (
                      <div className="space-y-2">
                        <p className="font-medium text-gray-900 text-sm">Key Achievements:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {exp.technologies && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                      {edu.location && (
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                    </div>
                  </div>
                  
                  {edu.description && (
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  )}
                  
                  {edu.achievements && (
                    <div className="mt-3">
                      <ul className="text-sm text-gray-600 space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <Award className="w-6 h-6 text-blue-600 mr-3" />
              Certifications & Awards
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-blue-600 text-sm font-medium">{cert.issuer}</p>
                      {cert.description && (
                        <p className="text-gray-600 text-sm mt-1">{cert.description}</p>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.year}
                      </div>
                      {cert.status && (
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                          cert.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {cert.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;