import React from 'react';
import Icon from '../elements/Icon';

function HomePage() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Your Vision, Our Mission</h1>
            <p className="hero-subtitle">
              Discover the perfect contact lenses for your lifestyle with our comprehensive guide to lens types, care, and products.
            </p>
            <div className="hero-actions">
              <a href="/lens-categories" className="btn btn-primary btn-large me-3">
                Explore Lens Types
              </a>
              <a href="/information" className="btn btn-secondary btn-large mx-2">
                Patient Information
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Contact Lenses?</h2>
            <p className="section-subtitle">
              Discover the benefits of contact lenses for your active lifestyle
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="fa-eye" size="3.5rem" />
              </div>
              <h3 className="feature-title">Natural Vision</h3>
              <p className="feature-description">
                Experience unobstructed peripheral vision and a natural field of view without frames.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="fa-running" size="3.5rem" />
              </div>
              <h3 className="feature-title">Active Lifestyle</h3>
              <p className="feature-description">
                Perfect for sports and physical activities without the worry of glasses slipping or breaking.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="fa-sun" size="3.5rem" />
              </div>
              <h3 className="feature-title">Aesthetic Freedom</h3>
              <p className="feature-description">
                Enjoy your natural appearance without frames, or enhance your look with cosmetic lenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Our Resources</h2>
            <p className="section-subtitle">
              Find everything you need to know about contact lenses and eye care
            </p>
          </div>

          <div className="row gap-4">
            <div className="col-3 col-md-4">
              <div className="feature-card text-center">
                <div className="feature-icon display-3">
                  <Icon name="fa-book" size="3rem" />
                </div>
                <h3 className="feature-title">Patient Information</h3>
                <p className="feature-description">
                  Learn about safety, hygiene, and proper wearing instructions
                </p>
                <a href="/information" className="btn btn-primary mt-3">
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-3 col-md-4">
              <div className="feature-card text-center">
                <div className="feature-icon display-3">
                  <Icon name="fa-search" size="3rem" />
                </div>
                <h3 className="feature-title">Lens Categories</h3>
                <p className="feature-description">
                  Explore different types of lenses for various vision needs
                </p>
                <a href="/lens-categories" className="btn btn-primary mt-3">
                  Browse Categories
                </a>
              </div>
            </div>

            <div className="col-3 col-md-4">
              <div className="feature-card text-center">
                <div className="feature-icon display-3">
                  <Icon name="fa-flask" size="3rem" />
                </div>
                <h3 className="feature-title">Lens Care</h3>
                <p className="feature-description">
                  Discover cleaning solutions and care guidelines for healthy eyes
                </p>
                <a href="/lens-care" className="btn btn-primary mt-3">
                  Care Guide
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 text-center">
              <a href="/products" className="btn btn-secondary btn-large">
                Browse All Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Improve Your Vision?</h2>
            <p className="cta-subtitle">
              Get personalized recommendations for the perfect contact lenses
            </p>
            <p className="cta-description">
              Our team of eye care professionals is ready to help you find the best solution for your vision needs.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary btn-large">
                Send Enquiry
              </a>
              <a href="/information" className="btn btn-secondary btn-large">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;