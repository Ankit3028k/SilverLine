import React, { useState } from 'react';
import Icon from '../elements/Icon';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lensType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    alert('Thank you for your enquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      lensType: '',
      message: ''
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-center">
        <div className="col-12">
          <h1 className="section-title text-center mb-4">Contact Us</h1>
          <p className="section-subtitle text-center mb-5">
            Have questions about our products? Send us an enquiry and we'll get back to you soon.
          </p>
        </div>
      </div>

      <div className="row justify-center">
        <div className="col-12 col-md-8">
          <div className="feature-card">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lensType" className="form-label fw-bold">Lens Type Interested In</label>
                <select
                  className="form-control"
                  id="lensType"
                  name="lensType"
                  value={formData.lensType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a lens type</option>
                  <option value="soft">Soft Lenses</option>
                  <option value="rgp">RGP Lenses</option>
                  <option value="silicone-hydrogel">Silicone Hydrogel</option>
                  <option value="cosmetic">Cosmetic Lenses</option>
                  <option value="pediatric">Pediatric Lenses</option>
                  <option value="keratoconus">Keratoconus Lenses</option>
                  <option value="specialty">Specialty/Campaign Lenses</option>
                  <option value="care">Lens Care Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-bold">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="text-center mt-5">
                <button type="submit" className="btn btn-primary btn-large">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="feature-card">
            <h2 className="feature-title text-center">Our Contact Information</h2>
            <div className="row mt-4 text-center">
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="feature-icon display-4">
                  <Icon name="fa-phone" size="3rem" />
                </div>
                <h3 className="feature-title">Phone</h3>
                <p className="feature-description">+1 (555) 123-4567</p>
              </div>
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <div className="feature-icon display-4">
                  <Icon name="fa-envelope" size="3rem" />
                </div>
                <h3 className="feature-title">Email</h3>
                <p className="feature-description">info@contactlensinfo.com</p>
              </div>
              <div className="col-12 col-md-4">
                <div className="feature-icon display-4">
                  <Icon name="fa-map-marker" size="3rem" />
                </div>
                <h3 className="feature-title">Office</h3>
                <p className="feature-description">123 Eye Care Avenue<br />Vision City, VC 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;