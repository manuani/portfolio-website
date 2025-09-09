import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/srinivasan-muralidharan',
      icon: 'LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/srinivasan-muralidharan',
      icon: 'GitHub'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/srinivasan_tech',
      icon: 'Twitter'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Srinivasan Muralidharan</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformational Technology Executive driving digital innovation and business growth 
              across Fortune 500 companies. Passionate about emerging technologies and their potential 
              to solve complex business challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>San Francisco Bay Area, CA</p>
              <p>Available for strategic consulting</p>
              <p>and advisory opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Srinivasan Muralidharan. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" />
            and passion for technology.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;