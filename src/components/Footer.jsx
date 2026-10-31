import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  const whatsappNumber = "918296320731";
  const email = "Md1915818@gmail.com";

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* FOOTER MAIN */}
        <div className="footer-main">
          {/* BRAND */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>BS</span> TRAVELS
            </a>

            <p>
              Your journey matters to us. Travel with comfort,
              convenience, and confidence with BS Travels.
            </p>

            <div className="footer-tagline">
              COMFORT <span>•</span> CONVENIENCE <span>•</span> EVERY JOURNEY
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#fleet">Our Fleet</a>
            <a href="#reviews">Reviews</a>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Get In Touch</h3>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt />
              <span>Contact Us on WhatsApp</span>
            </a>

            <a href={`mailto:${email}`}>
              <FaEnvelope />
              <span>{email}</span>
            </a>

            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>Contact us for your travel requirements.</span>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="footer-cta">
          <div>
            <span className="footer-cta-eyebrow">
              READY FOR YOUR NEXT TRIP?
            </span>
            <h2>Let's Get You There.</h2>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello BS Travels! I'd like to enquire about a trip."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cta-button"
          >
            Plan Your Journey <FaArrowRight />
          </a>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} BS Travels. All rights reserved.
          </p>

          <p className="footer-credit">
            Designed &amp; Developed by{" "}
            <a
              href="https://zelvixmedia.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zelvix Media
            </a>
          </p>

          <a href="#home">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;