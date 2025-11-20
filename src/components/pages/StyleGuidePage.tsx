import React from 'react';
import Button from '../elements/Button';
import Card from '../elements/Card';
import Icon from '../elements/Icon';

export default function StyleGuidePage() {
  return (
    <div className="page-container">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title">Style Guide</h1>
          <p className="section-subtitle">A showcase of our improved styling components</p>
        </div>
        
        <div className="features-grid">
          <Card 
            title="Buttons" 
            description="Our improved button styles with hover effects and animations" 
            icon="🔘"
          />
          <Card 
            title="Cards" 
            description="Beautiful card components with subtle shadows and hover effects" 
            icon="🃏"
          />
          <Card 
            title="Typography" 
            description="Consistent typography with proper hierarchy and spacing" 
            icon="🔤"
          />
        </div>
        
        <div className="section-header mt-5">
          <h2 className="section-title">Button Examples</h2>
        </div>
        
        <div className="gap-3 flex justify-center">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="primary" size="large">Large Primary</Button>
          <Button variant="secondary" size="small">Small Secondary</Button>
        </div>
        
        <div className="section-header mt-5">
          <h2 className="section-title">Icon Examples</h2>
        </div>
        
        <div className="features-grid">
          <div className="feature-card text-center">
            <div className="feature-icon">
              <Icon name="fa-home" size="3rem" />
            </div>
            <h3 className="feature-title">Home</h3>
            <p className="feature-description">Font Awesome Home Icon</p>
          </div>
          
          <div className="feature-card text-center">
            <div className="feature-icon">
              <Icon name="io-person" size="3rem" />
            </div>
            <h3 className="feature-title">Person</h3>
            <p className="feature-description">Ionicons Person Icon</p>
          </div>
          
          <div className="feature-card text-center">
            <div className="feature-icon">
              <Icon name="md-email" size="3rem" />
            </div>
            <h3 className="feature-title">Email</h3>
            <p className="feature-description">Material Design Email Icon</p>
          </div>
        </div>
      </section>
    </div>
  );
}