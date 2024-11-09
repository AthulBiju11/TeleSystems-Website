import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contents">
        <div className="copyright-div">Copyright © 2024 TELE SYSTEMS - All Rights Reserved</div>
        <div className="links-div">
            <ul>
                <li>About Us</li>
                <nav>
                  <li><a href="/contact-us/">Contact Us</a></li>
                </nav>
                
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
