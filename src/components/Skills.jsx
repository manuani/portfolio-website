import React from 'react';
import { Code, Users, TrendingUp, Shield, Cloud, Brain } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Leadership",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: skills.technical
    },
    {
      title: "Leadership & Management",
      icon: <Users className="w-6 h-6" />,
      color: "green",
      skills: skills.leadership
    },
    {
      title: "Business & Strategy",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "purple",
      skills: skills.business
    }
  ];

  const specializations = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud Architecture",
      description: "Enterprise cloud strategy, migration, and optimization across AWS, Azure, and GCP platforms"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Cybersecurity",
      description: "Zero-trust architecture, security frameworks, and risk management for large-scale organizations"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI/ML Strategy",
      description: "AI transformation roadmaps, ML operations, and intelligent automation implementation"
    }
  ];

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        border: 'border-blue-200',
        progress: 'bg-blue-600'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        border: 'border-green-200',
        progress: 'bg-green-600'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        border: 'border-purple-200',
        progress: 'bg-purple-600'
      }
    };
    return colorMap[color][type];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two decades of experience spanning technical innovation, team leadership, and strategic business transformation
          </p>
        </div>

        {/* Core Specializations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {specializations.map((spec, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-xl mb-6 mx-auto">
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{spec.title}</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">{spec.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className={`${getColorClasses(category.color, 'bg')} p-3 rounded-xl ${getColorClasses(category.color, 'text')} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getColorClasses(category.color, 'progress')}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    {skill.description && (
                      <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Competencies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Professional Competencies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Digital Transformation", "Cloud Migration", "Team Leadership", "Product Strategy",
              "Agile Methodologies", "DevOps", "Data Analytics", "Risk Management",
              "Vendor Management", "Budget Planning", "Stakeholder Relations", "Innovation Management"
            ].map((competency, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group cursor-pointer"
              >
                <span className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
                  {competency}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Leverage These Skills?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're looking for strategic leadership, technical expertise, or transformation guidance, 
              let's discuss how these skills can drive your organization forward.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;