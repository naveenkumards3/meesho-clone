const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="download-app">
          <h2 className="shop-non-stop-text">Shop Non-Stop on Meesho</h2>
          <span className="trusted-by-text">
            Trusted by more than 1 Crore Indians <br />
            Cash on Delivery | Free Delivery
          </span>
          <div className="download-img">
            <img src="google.png" alt="download" />
          </div>
        </div>
        <div className="career-container">
          <div>
            <ul className="career-text">
              <li>Careers</li>
              <li>Become a supplier</li>
              <li>Hall of Fame</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="legal-text">
            <ul>
              <li>Legal and Policies</li>
              <li>Meesho Tech Blog</li>
              <li>Notices and Returns</li>
            </ul>
          </div>
        </div>
        <div className="reach-out-container">
          <h2 className="reach-out-text">Reach out to us</h2>
          <div>
            <img
              className="social-media-apps"
              src="public/apps.png"
              alt="social-media-apps"
            />
          </div>
        </div>
        <div className="contact-us-container">
          <h2 className="contact-us-text">Contact Us</h2>
          <p className="address-text">
            Fashnear Technologies Private Limited, CIN:U74900KA2015PTCC082263
            3rd Floor, Wing-E,Helios Business Park,Kadubeesanahalli Village,
            Varthur Hobli, Outer Ring Road Bellandur, Bangalore,Bangalore
            South,Karnataka,India,560103 <br /> E-mail address: query@meesho.com{" "}
            <br />
            &#169;2015-2024 Meesho.com
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
