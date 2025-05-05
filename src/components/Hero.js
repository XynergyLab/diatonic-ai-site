import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Elevate Your AI Expertise</h2>
            <p className="text-lg md:text-xl mb-8">Diatonic AI: Your hub for AI education, tools, and testing across all industries.</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#get-started" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-center"
              >
                Get Started
              </a>
              <a 
                href="#learn-more" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition text-center"
              >
                Learn More
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="mt-12 pt-6 border-t border-blue-700 inline-block">
              <p className="text-blue-300 mb-2">Trusted by industry leaders</p>
              <div className="flex justify-center md:justify-start items-center space-x-6">
                <div className="text-center">
                  <div className="font-bold text-2xl">500+</div>
                  <div className="text-sm text-blue-300">Companies</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl">10k+</div>
                  <div className="text-sm text-blue-300">Users</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl">98%</div>
                  <div className="text-sm text-blue-300">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <svg 
              className="w-full max-w-md" 
              viewBox="0 0 500 400" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Abstract geometric AI/tech illustration */}
              <circle cx="250" cy="150" r="50" fill="rgba(59, 130, 246, 0.7)" />
              <circle cx="200" cy="220" r="60" fill="rgba(219, 234, 254, 0.1)" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2" />
              <circle cx="300" cy="220" r="70" fill="rgba(219, 234, 254, 0.1)" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2" />
              <polygon points="250,60 300,170 200,170" fill="rgba(219, 234, 254, 0.3)" />
              <line x1="180" y1="150" x2="320" y2="150" stroke="rgba(219, 234, 254, 0.5)" strokeWidth="2" />
              <line x1="250" y1="100" x2="250" y2="300" stroke="rgba(219, 234, 254, 0.5)" strokeWidth="2" />
              <line x1="190" y1="110" x2="310" y2="190" stroke="rgba(219, 234, 254, 0.5)" strokeWidth="2" />
              <line x1="310" y1="110" x2="190" y2="190" stroke="rgba(219, 234, 254, 0.5)" strokeWidth="2" />
              <rect x="225" y="270" width="50" height="50" fill="rgba(59, 130, 246, 0.5)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
