import React from 'react';
import { CheckCircle2, TrendingUp, Award, Users } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Business Growth",
      description: "$2B+ revenue growth across cloud, cybersecurity, and AI segments"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
      title: "Operational Excellence",
      description: "55% efficiency improvements through digital transformation"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Innovation Leadership",
      description: "Led development of cutting-edge AI and cybersecurity solutions"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Team Excellence",
      description: "Built and led high-performing global technology teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a transformational technology executive with over two decades of experience, I've dedicated my career to driving digital innovation and business transformation across Fortune 500 companies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey spans from hands-on technical roles to C-suite leadership, where I've consistently delivered breakthrough results by combining deep technical expertise with strategic business acumen. I specialize in scaling technology organizations, driving cloud transformations, and building next-generation cybersecurity and AI capabilities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Throughout my career, I've maintained a passion for emerging technologies and their potential to solve complex business challenges. Whether leading digital transformations or building innovative products, I focus on creating sustainable value and competitive advantages.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-3">
                  {achievement.icon}
                  <h4 className="text-lg font-semibold text-gray-900 ml-3">
                    {achievement.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;