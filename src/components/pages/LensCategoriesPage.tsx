import React from 'react';
import Icon from '../elements/Icon';

const LensCategoriesPage = () => {
  // Define lens categories with icons
  const categories = [
    { id: 1, name: 'Pediatric', icon: 'fa-user', description: 'Special lenses designed for children and teens' },
    { id: 2, name: 'Cosmetic', icon: 'fa-star', description: 'Colored and special effect lenses for aesthetic purposes' },
    { id: 3, name: 'Campaign/Specialty', icon: 'fa-heart', description: 'Unique lenses for special occasions and events' },
    { id: 4, name: 'Keratoconus/Irregular Cornea', icon: 'fa-sun', description: 'Specialized lenses for irregular corneal shapes' },
    { id: 5, name: 'Silicone Hydrogel', icon: 'fa-flask', description: 'High oxygen permeable lenses for extended comfort' },
    { id: 6, name: 'Soft Lenses', icon: 'fa-cloud', description: 'Flexible lenses for everyday comfort' },
    { id: 7, name: 'RGP Lenses', icon: 'fa-diamond', description: 'Rigid gas permeable lenses for sharp vision' },
  ];

  return (
    <div className="container py-5">
      <div className="row justify-center">
        <div className="col-12">
          <h1 className="section-title text-center mb-4">Lens Categories</h1>
          <p className="section-subtitle text-center mb-5">
            Explore our different types of contact lenses designed for various needs
          </p>
        </div>
      </div>

      <div className="row gap-4 justify-center">
        {categories.map((category) => (
          <div key={category.id} className="col-3 col-md-4">
            <div className="feature-card text-center">
              <div className="feature-icon display-3">
                <Icon name={category.icon} size="3rem" />
              </div>
              <h2 className="feature-title">{category.name}</h2>
              <p className="feature-description mb-4">{category.description}</p>
              <a href={`/lens/${category.name.toLowerCase().replace('/', '-').replace(' ', '-')}/overview`} className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LensCategoriesPage;