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
            <h1 className="brand-wrapper">
                <div className="brand-line">
                    <span className="brand">BRANDMOUNT</span>
                </div>
                <span className="year">23</span>
                </h1>



          </div>

        </div>
       
          <div className="footer-links poppins">
            <ul >
              <li><a href="/">Home</a></li>
            </ul>
            <ul style={{textAlign:'left'}}>
              <li><a href="#" >Services</a></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">About us</a></li>
            </ul>
            <ul>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
        <div className="footer-middle poppins">
          <div className="footer-help">
            <p style={{textAlign:'left'}}>Didn't find what you're looking for or have questions?<br />We're here to help — reach out anytime!</p>
            <div className="footer-form">
              <input type="email" placeholder="Email" />
              <button type="button">contact Us</button>
            </div>
          </div>

          <div className="footer-contact poppins">
            <p className="contact-title">CONTACT US</p>
            <p className="contact-phone">+1 891 989–11–91</p>
            <p className="contact-email">hello@logolipsum.com</p>
          </div>

          <div className="footer-address poppins">
            <p>5th floor Hilite Business Park,<br/> Poovangal, Pantheeramkavu,<br/> Kerala 673014</p>
          </div>
        </div>

        <div className="foot">
           <div style={{alignItems:'end'}}>
        <div
  className="social poppins"
  style={{
    textAlign: 'left',       // Align text inside to the right
    width: 'fit-content',     // Shrink to content width
    margin: '0 auto'          // Center the div horizontally
  }}
>
  <p className="social-title ">FOLLOW US</p>
  <p style={{          color: '#454545'
}} className="social-links">
    Telegram&nbsp;&nbsp;/ &nbsp;&nbsp;Whatsapp&nbsp;&nbsp;/&nbsp;&nbsp;Instagram
  </p>
</div>

          </div>
          <div
  className="copy mt-10 poppins"
  style={{
    fontSize:'6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',  // Text inside is aligned left
    textAlign: 'left',
    width: 'fit-content',      // Shrink to fit content
    margin: '0 auto',           // Center the whole div horizontally
    marginTop:'20px'
  }}
>
  <p>© 2025 — COPYRIGHT</p>
  <p>PRIVACY</p>
</div>

        </div>

    <div className='scroller'>
          <div className="scroll-top" onClick={scrollToTop}>
          <span style={{fontSize:'bold'}}>↑</span>
        </div>
    </div>
      </div>


    </footer>
  );
}

export default Footer;