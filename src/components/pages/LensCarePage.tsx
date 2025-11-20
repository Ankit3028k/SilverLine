import React from 'react';

const LensCarePage = () => {
  return (
    <div className="container py-5">
      <div className="row justify-center">
        <div className="col-12">
          <h1 className="section-title text-center mb-4">Lens Care Solutions</h1>
          <p className="section-subtitle text-center mb-5">
            Proper care ensures healthy eyes and extends the life of your contact lenses
          </p>
        </div>
      </div>

      <div className="row gap-4">
        <div className="col-12 col-md-6">
          <div className="feature-card">
            <h2 className="feature-title">Cleaning Solutions</h2>
            <p className="feature-description">
              Use only recommended cleaning solutions for your lens type. Never use water, saliva, 
              or homemade solutions. Multi-purpose solutions clean, disinfect, and store lenses in one step.
            </p>
            <ul className="mt-3">
              <li>Rub lenses gently with solution before storing</li>
              <li>Replace solution in case every time you store lenses</li>
              <li>Use fresh solution daily - never reuse or top off</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="feature-card">
            <h2 className="feature-title">Disinfection</h2>
            <p className="feature-description">
              Proper disinfection kills harmful microorganisms that can cause infections. 
              Follow the recommended soaking time for your solution. Hydrogen peroxide systems 
              require a neutralization step before wearing.
            </p>
            <ul className="mt-3">
              <li>Always follow manufacturer's recommended soaking time</li>
              <li>Replace solution daily, even if lenses aren't worn</li>
              <li>Clean case weekly and replace every 3 months</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="feature-card">
            <h2 className="feature-title">Storage Guidelines</h2>
            <p className="feature-description">
              Store lenses in a clean, closed case filled with fresh solution. Keep case 
              away from bathroom areas to avoid contamination. Always store lenses in solution - 
              never dry.
            </p>
            <ul className="mt-3">
              <li>Store case upside down on a clean tissue</li>
              <li>Rinse case with solution (not water) after each use</li>
              <li>Allow case to air dry completely between uses</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="feature-card">
            <h2 className="feature-title">Do's and Don'ts</h2>
            <div className="row">
              <div className="col-6">
                <h3 className="feature-title primary2">Do's</h3>
                <ul>
                  <li>Wash hands thoroughly before handling</li>
                  <li>Use fresh solution daily</li>
                  <li>Replace lenses as scheduled</li>
                  <li>Remove lenses before sleeping</li>
                  <li>Visit your eye care professional regularly</li>
                </ul>
              </div>
              <div className="col-6">
                <h3 className="feature-title primary1">Don'ts</h3>
                <ul>
                  <li>Don't use water or saliva to clean</li>
                  <li>Don't "top off" solution</li>
                  <li>Don't wear lenses longer than prescribed</li>
                  <li>Don't share lenses or cases</li>
                  <li>Don't ignore signs of irritation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <a href="/products?category=lens-care" className="btn btn-primary btn-large">
            Browse Lens Care Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default LensCarePage;