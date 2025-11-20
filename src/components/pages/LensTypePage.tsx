import React from 'react';
import { useParams } from 'react-router-dom';

const LensTypePage = () => {
  const { category, type } = useParams();

  // Sample data for different lens types
  const lensData = {
    'soft-lenses': {
      title: 'Soft Contact Lenses',
      description: 'Soft contact lenses are made from flexible hydrogel materials that conform to the shape of your eye, providing exceptional comfort.',
      guide: 'Soft lenses are ideal for beginners and occasional wearers. They come in daily, weekly, and monthly replacement schedules. Insert by placing the lens on your finger, holding your eye open, and gently placing it on your eye.',
      info: 'Soft lenses are available in spherical, toric (for astigmatism), and multifocal designs. They typically have a water content between 38-42%.',
      image: '/placeholder-lens.jpg',
      video: null
    },
    'rgp-lenses': {
      title: 'RGP (Rigid Gas Permeable) Lenses',
      description: 'RGP lenses are made from rigid oxygen-permeable materials that maintain their shape on the eye, providing crisp, clear vision.',
      guide: 'RGP lenses require an adaptation period of 1-2 weeks. They should be cleaned daily with specific RGP solutions. Insertion and removal techniques differ from soft lenses.',
      info: 'RGPs offer superior oxygen transmission compared to traditional hard lenses. They are particularly beneficial for patients with astigmatism or keratoconus.',
      image: '/placeholder-lens.jpg',
      video: null
    },
    'silicone-hydrogel': {
      title: 'Silicone Hydrogel Lenses',
      description: 'These advanced lenses combine the comfort of hydrogel with the high oxygen permeability of silicone, allowing more oxygen to reach the eye.',
      guide: 'Silicone hydrogel lenses are suitable for extended wear. Follow the same insertion/removal process as soft lenses but with enhanced comfort for longer periods.',
      info: 'With Dk/t values often exceeding 100, these lenses provide excellent ocular health benefits. Available in daily disposables to monthly schedules.',
      image: '/placeholder-lens.jpg',
      video: null
    },
    'cosmetic': {
      title: 'Cosmetic Contact Lenses',
      description: 'Designed to enhance or change the appearance of your eyes, cosmetic lenses come in a variety of colors and special effects.',
      guide: 'Cosmetic lenses require the same care as corrective lenses. Ensure proper fit and follow wearing schedules. Never share cosmetic lenses with others.',
      info: 'Available in enhancement tints (to enhance natural color) and opaque tints (to completely change eye color). Also offered in special effect designs.',
      image: '/placeholder-lens.jpg',
      video: null
    },
    'pediatric': {
      title: 'Pediatric Contact Lenses',
      description: 'Specifically designed for children and teenagers, these lenses prioritize safety, ease of handling, and myopia control.',
      guide: 'Parents should assist younger children with insertion and removal. Teach proper hygiene early. Regular monitoring by an eye care professional is essential.',
      info: 'Studies show that certain soft lenses can slow myopia progression in children by up to 50%. Typically prescribed for ages 8 and above.',
      image: '/placeholder-lens.jpg',
      video: null
    },
    'keratoconus': {
      title: 'Keratoconus/Irregular Cornea Lenses',
      description: 'Specialized lenses designed to correct vision for patients with irregular corneal shapes caused by keratoconus or post-surgical complications.',
      guide: 'Fitting requires specialized expertise. These lenses may have a steeper learning curve for insertion/removal but provide significant visual improvement.',
      info: 'Options include specialized soft lenses, hybrid lenses (soft center with rigid periphery), and scleral lenses that vault over the entire cornea.',
      image: '/placeholder-lens.jpg',
      video: null
    }
  };

  const currentLens = lensData[type] || {
    title: `${category} - ${type}`,
    description: 'Detailed information about this lens type will be available soon.',
    guide: 'Care and usage instructions coming soon.',
    info: 'Additional information will be added shortly.',
    image: '/placeholder-lens.jpg'
  };

  return (
    <div className="container py-5">
      <div className="row justify-center">
        <div className="col-12">
          <h1 className="section-title text-center mb-4">{currentLens.title}</h1>
          <p className="section-subtitle text-center mb-5">
            {currentLens.description}
          </p>
        </div>
      </div>

      <div className="row gap-4">
        <div className="col-12 col-md-6">
          <div className="feature-card">
            <h2 className="feature-title">User Guide</h2>
            <p className="feature-description">
              {currentLens.guide}
            </p>
            
            {currentLens.video && (
              <div className="mt-4 text-center">
                <div className="ratio ratio-16x9">
                  <iframe 
                    src={currentLens.video} 
                    title={`${currentLens.title} Guide Video`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="feature-card">
            <h2 className="feature-title">Lens Information</h2>
            <p className="feature-description">
              {currentLens.info}
            </p>
            
            <div className="text-center mt-4">
              <img 
                src={currentLens.image} 
                alt={currentLens.title} 
                className="img-fluid rounded" 
                style={{ maxHeight: '200px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="feature-card text-center">
            <h2 className="feature-title">Interested in this lens type?</h2>
            <p className="feature-description">
              Browse our selection of {currentLens.title} or send us an enquiry for personalized recommendations.
            </p>
            <div className="mt-4 d-flex justify-center gap-3">
              <a href="/products" className="btn btn-secondary">
                Browse Products
              </a>
              <a href="/contact" className="btn btn-primary">
                Send Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LensTypePage;