import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setStatus({
      type: 'loading',
      message: 'Sending your message...'
    });

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      
      if (!backendUrl) {
        throw new Error('Backend URL not configured');
      }

      const response = await axios.post(`${backendUrl}/api/status`, {
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        subject: formData.subject,
        message: formData.message,
        status: 'new',
        priority: 'medium'
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 second timeout
      });

      if (response.status === 201) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.'
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      
      let errorMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please check your connection and try again.';
      } else if (error.response) {
        // Server responded with error
        if (error.response.status === 422) {
          errorMessage = 'Please check your input and try again.';
        } else if (error.response.status >= 500) {
          errorMessage = 'Server temporarily unavailable. Please try again later.';
        }
      } else if (error.request) {
        // Network error
        errorMessage = 'Network error. Please check your connection and try again.';
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "srinivasan.muralidharan@example.com",
      action: "mailto:srinivasan.muralidharan@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "San Francisco Bay Area, CA",
      action: null
    }
  ];

  const renderStatusMessage = () => {
    if (!status.message) return null;

    const statusConfig = {
      success: {
        icon: <CheckCircle2 className="w-5 h-5" />,
        bgColor: 'bg-green-50',
        textColor: 'text-green-800',
        borderColor: 'border-green-200'
      },
      error: {
        icon: <AlertCircle className="w-5 h-5" />,
        bgColor: 'bg-red-50',
        textColor: 'text-red-800',
        borderColor: 'border-red-200'
      },
      loading: {
        icon: <Clock className="w-5 h-5 animate-spin" />,
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-800',
        borderColor: 'border-blue-200'
      }
    };

    const config = statusConfig[status.type];

    return (
      <div className={`flex items-center p-4 rounded-lg border ${config.bgColor} ${config.borderColor} mb-6`}>
        <div className={`${config.textColor} mr-3`}>
          {config.icon}
        </div>
        <p className={`${config.textColor} text-sm font-medium`}>
          {status.message}
        </p>
      </div>
    );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next technology transformation? Let's connect and explore how we can drive innovation together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-lg text-gray-600 mb-8">
                I'm always interested in discussing new opportunities, partnerships, or innovative projects. 
                Whether you're looking for strategic technology leadership, transformation expertise, or industry insights, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{info.title}</h4>
                    {info.action ? (
                      <a 
                        href={info.action}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Digital Transformation & Technology Strategy</li>
                <li>• Cloud Architecture & Migration</li>
                <li>• Cybersecurity & Risk Management</li>
                <li>• AI/ML Implementation & Strategy</li>
                <li>• Executive Leadership & Team Building</li>
                <li>• Startup Advisory & Investment</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Message</h3>
            
            {renderStatusMessage()}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status.type === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status.type === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status.type === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                  placeholder="Tell me about your project, goals, or how I can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center justify-center space-x-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;