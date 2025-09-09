import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">Srinivasan Muralidharan</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Srinivasan Muralidharan
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-8">
              Transformational Technology Executive
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              20+ years of experience driving digital transformation and business growth across Fortune 500 companies. 
              Expertise in cloud architecture, AI/ML strategy, and cybersecurity leadership.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Download Resume
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a transformational technology executive with over two decades of experience, I've dedicated my career to driving digital innovation and business transformation across Fortune 500 companies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey spans from hands-on technical roles to C-suite leadership, where I've consistently delivered breakthrough results by combining deep technical expertise with strategic business acumen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Growth</h4>
                <p className="text-gray-600 text-sm">$2B+ revenue growth across cloud, cybersecurity, and AI segments</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Operational Excellence</h4>
                <p className="text-gray-600 text-sm">55% efficiency improvements through digital transformation</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibant text-gray-900 mb-2">Innovation Leadership</h4>
                <p className="text-gray-600 text-sm">Led development of cutting-edge AI and cybersecurity solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Excellence</h4>
                <p className="text-gray-600 text-sm">Built and led high-performing global technology teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Chief Technology Officer</h3>
              <p className="text-blue-600 font-medium text-lg mb-2">Global Technology Corporation</p>
              <p className="text-gray-500 mb-4">2020 - Present | San Francisco, CA</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Leading digital transformation initiatives and technology strategy for a $5B+ organization with global operations across 25 countries.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Drove $2B+ revenue growth through cloud transformation and AI implementation</li>
                <li>Improved operational efficiency by 55% through automation and process optimization</li>
                <li>Led team of 500+ technology professionals across multiple business units</li>
                <li>Reduced infrastructure costs by 40% while improving system reliability to 99.9%</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Vice President of Technology</h3>
              <p className="text-blue-600 font-medium text-lg mb-2">Fortune 500 Financial Services</p>
              <p className="text-gray-500 mb-4">2016 - 2020 | New York, NY</p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Oversaw technology transformation for core banking systems and digital customer experiences serving 10M+ customers.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Led $500M cloud migration project completed 6 months ahead of schedule</li>
                <li>Improved application performance by 60% through modernization initiatives</li>
                <li>Reduced security incidents by 80% through enhanced cybersecurity measures</li>
                <li>Built high-performing engineering teams across 4 development centers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Srinivasan Muralidharan</h3>
          <p className="text-gray-300 mb-6">Transformational Technology Executive</p>
          <p className="text-gray-400 text-sm">
            © 2024 Srinivasan Muralidharan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
