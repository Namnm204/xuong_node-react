const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-item">
          <h2>Funiro.</h2>
          <p className="footer-item-position">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div className="footer-link">
          <p>Links</p>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </div>
        <div className="footer-help">
          <p>Help</p>
          <li>
            <a href="">Payment Options</a>
          </li>
          <li>
            <a href="">Returns</a>
          </li>
          <li>
            <a href="">Privacy Policies</a>
          </li>
        </div>
        <div className="footer-search">
          <p>Newsletter</p>
          <input type="text" placeholder="Enter Your Email Address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <hr />
      <p className="date container">2023 furino. All rights reverved</p>
    </footer>
  );
};

export default Footer;
