'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#" className="logo">Dallas Wheels</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="wheel-animation"></div>
        <div className="hero-content">
          <h1>Dallas Wheels</h1>
          <p className="tagline">Where Experience Meets Innovation</p>
          <p className="subtitle">Traditional wheel building enhanced by analytics technology</p>
          
          <div className="special-banner">
            <h2>🎉 INTRODUCTORY SPECIAL</h2>
            <p className="discount">SAVE UP TO $1,195!</p>
            <p className="special-text">Premium German Components</p>
            <p>Munich Composites Rims • Tune Hubs • Sapim Spokes</p>
            <a href="#pricing" className="btn">View Special Offers</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2>Precision Craftsmanship Since 1973</h2>
          <div className="about-content">
            <div className="about-text">
              <p>With over 50 years of experience in precision wheel building, Dallas Wheels combines traditional craftsmanship with cutting-edge Trudi analytics technology. From our start in 1973 to owning a bike shop in the &apos;90s, we&apos;ve evolved to meet the demands of modern cycling.</p>
              <p className="mt-1">Today, we use advanced wheel analytics to ensure every wheel we build meets the highest standards of precision and performance. Whether you&apos;re a competitive cyclist, a weekend warrior, or a bike shop looking for reliable wheel services, we deliver wheels that matter.</p>
              <p className="mt-1"><strong>Convenient pickup and delivery available through our Bike Medics partnership</strong> - perfect for busy professionals and those needing wheelchair service.</p>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div>Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">10,000+</div>
                <div>Wheels Built</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div>Precision Verified</div>
              </div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="image-gallery">
            <div className="gallery-grid">
              <div className="gallery-item">
                <Image src="/wheel1.jpg" alt="Custom wheel build" width={300} height={200} />
              </div>
              <div className="gallery-item">
                <Image src="/wheel2.jpg" alt="Precision wheel truing" width={300} height={200} />
              </div>
              <div className="gallery-item">
                <Image src="/wheel3.jpg" alt="Wheel analytics" width={300} height={200} />
              </div>
              <div className="gallery-item">
                <Image src="/wheel4.jpg" alt="Finished wheelset" width={300} height={200} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Custom Wheel Building</h3>
              <p>Hand-built wheels optimized with analytics technology for perfect tension and trueness</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Precision Repair</h3>
              <p>Expert wheel truing and repair services to get you back on the road</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Wheel Analytics</h3>
              <p>Detailed reporting on spoke tension, dish, and roundness using Trudi technology</p>
            </div>
            <div className="service-card">
              <div className="service-icon">♿</div>
              <h3>Wheelchair & DME Services</h3>
              <p>Specialized wheelchair wheel repair and maintenance. Pickup/delivery via Bike Medics for your convenience</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚐</div>
              <h3>Pickup & Delivery</h3>
              <p>Through our Bike Medics partnership - convenient service at your home or office</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🕰️</div>
              <h3>Vintage Restoration</h3>
              <p>Bringing classic wheels back to life with period-correct components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2>Introductory Pricing</h2>
          <div className="pricing-cards">
            <div className="pricing-card featured">
              <span className="badge">LIMITED TIME</span>
              <h3>30mm &quot;All Blacks&quot;</h3>
              <div className="original-price">$2,295</div>
              <div className="price">$1,400</div>
              <p>Save $895!</p>
              <ul className="price-details">
                <li>Munich Composites 30mm Rims</li>
                <li>Tune MAG170/180 Hubs</li>
                <li>Sapim CX-Ray Spokes</li>
                <li>Perfect for climbing & all-around</li>
                <li>Trudi Analytics Report Included</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Order Now</a>
            </div>
            
            <div className="pricing-card featured">
              <span className="badge">LIMITED TIME</span>
              <h3>47mm &quot;All Blacks&quot;</h3>
              <div className="original-price">$2,695</div>
              <div className="price">$1,500</div>
              <p>Save $1,195!</p>
              <ul className="price-details">
                <li>Munich Composites 47mm Rims</li>
                <li>Tune MAG170/180 Hubs</li>
                <li>Sapim CX-Ray Spokes</li>
                <li>Ideal for speed & aerodynamics</li>
                <li>Trudi Analytics Report Included</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Order Now</a>
            </div>
            
            <div className="pricing-card">
              <h3>Wheel Services</h3>
              <div className="price">Custom Quote</div>
              <ul className="price-details">
                <li>Wheel Truing: From $35</li>
                <li>Spoke Replacement: From $45</li>
                <li>Hub Service: From $75</li>
                <li>Full Rebuild: From $150</li>
                <li>Wheelchair Wheel Service: From $40</li>
                <li>Pickup/Delivery (via Bike Medics): $25</li>
                <li>Analytics Report: $25</li>
              </ul>
              <a href="#contact" className="btn">Get Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">Ready to experience wheels that matter?</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <h3>📍 Location</h3>
              <p>Dallas-Fort Worth Area</p>
              <p>Pickup/Delivery via Bike Medics</p>
              <p>Serving cyclists & wheelchair users</p>
            </div>
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>(972) 555-WHEEL</p>
              <p>Mon-Fri: 9AM-6PM CST</p>
            </div>
            <div className="contact-item">
              <h3>✉️ Email</h3>
              <p>info@dallaswheels.com</p>
              <p>24-48 hour response</p>
            </div>
          </div>
          
          <a href="mailto:info@dallaswheels.com?subject=Introductory Special Inquiry" className="btn">Contact Us Today</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Dallas Wheels. All rights reserved.</p>
        <p>Traditional craftsmanship. Modern precision.</p>
        <p>Proud partner with Bike Medics for convenient pickup & delivery service</p>
      </footer>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-color: #1a1a1a;
          --accent-color: #e74c3c;
          --text-light: #666;
          --bg-light: #f8f8f8;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          scroll-behavior: smooth;
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          padding: 0.5rem 0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: var(--accent-color);
        }

        .hero {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                      radial-gradient(circle at center, #2a2a2a, #0a0a0a);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .wheel-animation {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 3px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          animation: rotate 20s linear infinite;
        }

        .wheel-animation::before {
          content: '';
          position: absolute;
          inset: 20px;
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 50%;
        }

        .wheel-animation::after {
          content: '';
          position: absolute;
          inset: 40px;
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 50%;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          padding: 0 2rem;
        }

        .hero h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, #e0e0e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tagline {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .subtitle {
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .special-banner {
          background: var(--accent-color);
          color: white;
          padding: 1.5rem;
          margin: 2rem auto;
          border-radius: 10px;
          max-width: 600px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .special-banner h2 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .special-banner .discount {
          font-size: 2.5rem;
          font-weight: bold;
          color: #ffd700;
        }

        .special-text {
          font-size: 1.2rem;
          margin: 1rem 0;
        }

        .btn {
          display: inline-block;
          padding: 1rem 2rem;
          background: white;
          color: var(--primary-color);
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .btn-primary {
          background: var(--accent-color);
          color: white;
        }

        section {
          padding: 5rem 2rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          position: relative;
        }

        h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: var(--accent-color);
        }

        .about {
          background: var(--bg-light);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-text {
          font-size: 1.1rem;
          color: var(--text-light);
        }

        .mt-1 {
          margin-top: 1rem;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--accent-color);
        }

        .image-gallery {
          margin-top: 3rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.05);
        }

        .gallery-item img {
          width: 100%;
          height: auto;
          display: block;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .pricing {
          background: var(--bg-light);
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pricing-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
          position: relative;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .pricing-card.featured {
          transform: scale(1.05);
          box-shadow: 0 10px 40px rgba(231, 76, 60, 0.2);
        }

        .badge {
          position: absolute;
          top: -15px;
          right: 20px;
          background: var(--accent-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .price {
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--primary-color);
          margin: 1rem 0;
        }

        .original-price {
          text-decoration: line-through;
          color: #999;
          font-size: 1.5rem;
        }

        .price-details {
          list-style: none;
          margin: 1.5rem 0;
        }

        .price-details li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }

        .contact {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }

        .contact h2::after {
          background: white;
        }

        .contact-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .contact-item {
          padding: 1rem;
        }

        .contact-item h3 {
          margin-bottom: 0.5rem;
        }

        footer {
          background: var(--primary-color);
          color: white;
          text-align: center;
          padding: 2rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .pricing-card.featured {
            transform: none;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
