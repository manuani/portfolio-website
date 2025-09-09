import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 1000,
        padding: '1rem 2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>Srinivasan Muralidharan</h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about" style={{ textDecoration: 'none', color: '#666' }}>About</a>
            <a href="#experience" style={{ textDecoration: 'none', color: '#666' }}>Experience</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#666' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        paddingTop: '100px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
            Srinivasan Muralidharan
          </h1>
          <h2 style={{ fontSize: '1.5rem', color: '#666', marginBottom: '2rem' }}>
            Transformational Technology Executive
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            20+ years of experience driving digital transformation and business growth across Fortune 500 companies. 
            Expertise in cloud architecture, AI/ML strategy, and cybersecurity leadership.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Download Resume
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#3b82f6',
              padding: '12px 24px',
              border: '2px solid #3b82f6',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '5rem 2rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>About Me</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>My Story</h3>
              <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '1rem' }}>
                As a transformational technology executive with over two decades of experience, I've dedicated my career to driving digital innovation and business transformation across Fortune 500 companies.
              </p>
              <p style={{ lineHeight: 1.6, color: '#555' }}>
                My journey spans from hands-on technical roles to C-suite leadership, where I've consistently delivered breakthrough results by combining deep technical expertise with strategic business acumen.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Business Growth</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>$2B+ revenue growth across cloud, cybersecurity, and AI segments</p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Operational Excellence</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>55% efficiency improvements through digital transformation</p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Innovation Leadership</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Led development of cutting-edge AI and cybersecurity solutions</p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Team Excellence</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Built and led high-performing global technology teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '5rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Experience</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Chief Technology Officer</h3>
              <p style={{ color: '#3b82f6', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Global Technology Corporation</p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>2020 - Present | San Francisco, CA</p>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                Leading digital transformation initiatives and technology strategy for a $5B+ organization with global operations across 25 countries.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: '#555', lineHeight: 1.6 }}>
                <li>Drove $2B+ revenue growth through cloud transformation and AI implementation</li>
                <li>Improved operational efficiency by 55% through automation and process optimization</li>
                <li>Led team of 500+ technology professionals across multiple business units</li>
                <li>Reduced infrastructure costs by 40% while improving system reliability to 99.9%</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Senior Vice President of Technology</h3>
              <p style={{ color: '#3b82f6', fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Fortune 500 Financial Services</p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>2016 - 2020 | New York, NY</p>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                Oversaw technology transformation for core banking systems and digital customer experiences serving 10M+ customers.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: '#555', lineHeight: 1.6 }}>
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
      <section id="contact" style={{ padding: '5rem 2rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Get In Touch</h2>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                  <input 
                    type="text" 
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                  <input 
                    type="email" 
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                <textarea 
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'background-color 0.3s'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Srinivasan Muralidharan</h3>
          <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Transformational Technology Executive</p>
          <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
            © 2024 Srinivasan Muralidharan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
