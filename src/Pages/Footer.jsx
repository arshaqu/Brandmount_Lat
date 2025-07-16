import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand flex">
            <h1>
              <span className="brand">BRANDMOUNT</span>
              <span className="year">23</span>
            </h1>
          </div>

        </div>

          <div className="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
            </ul>
            <ul style={{textAlign:'left'}}>
              <li><a href="#" className="section-title">Services</a></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">About us</a></li>
            </ul>
            <ul>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
        <div className="footer-middle">
          <div className="footer-help">
            <p>Didn't find what you're looking for or have questions?<br />We're here to help — reach out anytime!</p>
            <div className="footer-form">
              <input type="email" placeholder="Email" />
              <button type="button">contact Us</button>
            </div>
          </div>

          <div className="footer-contact">
            <p className="contact-title">CONTACT US</p>
            <p className="contact-phone">+1 891 989–11–91</p>
            <p className="contact-email">hello@logolipsum.com</p>
            <a href="#" className="callback">Call me back</a>
          </div>

          <div className="footer-address">
            <p>2972 Westheimer Rd. Santa Ana,<br />Illinois 85486</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social">
            <p className="social-title">FOLLOW US</p>
            <p className="social-links">Telegram&nbsp;&nbsp;/&nbsp;&nbsp;Whatsapp&nbsp;&nbsp;/&nbsp;&nbsp;Instagram</p>
          </div>
          <div className="copy">
            <p>© 2025 — COPYRIGHT</p>
            <p>PRIVACY</p>
          </div>
        </div>

        <div className="scroll-top" onClick={scrollToTop}>
          <span>↑</span>
        </div>
      </div>


    </footer>
  );
}

export default Footer;