import React from 'react';
import Icon from '../elements/Icon';

const InformationPage = () => {
  const topics = [
    {
      id: 1,
      title: 'Contact Lens Hygiene',
      description: 'Learn proper cleaning and storage techniques to maintain healthy eyes',
      icon: 'fa-hand-sparkles'
    },
    {
      id: 2,
      title: 'Wearing Schedule',
      description: 'Understand daily, weekly, and monthly wearing guidelines',
      icon: 'fa-calendar-alt'
    },
    {
      id: 3,
      title: 'Common Issues',
      description: 'Troubleshoot common problems like dryness, irritation, and discomfort',
      icon: 'fa-exclamation-triangle'
    },
    {
      id: 4,
      title: 'Eye Health',
      description: 'Maintain optimal eye health with regular checkups and proper care',
      icon: 'fa-heartbeat'
    }
  ];

  return (
    <div className="container py-5">
      <div className="row justify-center">
        <div className="col-12">
          <h1 className="section-title text-center mb-4">Patient Information</h1>
          <p className="section-subtitle text-center mb-5">
            Everything you need to know about contact lens care and eye health
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <div className="feature-card">
            <div className="info-image pattern-bg"></div>
            <h2 className="feature-title">Getting Started with Contact Lenses</h2>
            <p className="feature-description">
              Starting your journey with contact lenses can be exciting but also overwhelming. 
              Our comprehensive guide will walk you through everything you need to know about 
              choosing the right lenses, proper insertion and removal techniques, and maintaining 
              optimal eye health.
            </p>
            <p className="feature-description">
              Whether you're switching from glasses or trying contacts for the first time, 
              we provide step-by-step instructions and expert tips to ensure a smooth transition 
              to clear, comfortable vision.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="section-title text-center mb-4">Key Topics</h2>
        </div>
      </div>

      <div className="row gap-4 justify-center">
        {topics.map((topic) => (
          <div key={topic.id} className="col-4 col-md-3">
            <div className="feature-card text-center">
              <div className="feature-icon display-4">
                <Icon name={topic.icon} size="2.5rem" />
              </div>
              <h3 className="feature-title">{topic.title}</h3>
              <p className="feature-description">{topic.description}</p>
              <a href="#" className="btn btn-primary mt-3">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-3">
          <div className="feature-card text-center">
            <h2 className="feature-title">Need Professional Advice?</h2>
            <p className="feature-description">
              Our team of eye care professionals is ready to answer your questions and 
              provide personalized recommendations for your vision needs.
            </p>
            <a href="/contact" className="btn btn-secondary btn-large">
              Contact Our Experts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;