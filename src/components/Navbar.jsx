import { FaPhoneAlt, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <a href="/" className="navbar-logo">
        <span className="logo-bs">BS</span>
        <span className="logo-text">
          <strong>TRAVELS</strong>
          <small>YOUR JOURNEY, OUR PRIORITY</small>
        </span>
      </a> */}
<a href="#home" className="navbar-brand-text">
  BS TRAVELS MANGALORE
</a>
      <div className="navbar-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#fleet">Our Fleet</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="tel:+918296320731" className="navbar-contact">
        <FaPhoneAlt />
        <span>
          <small>Call Us Anytime</small>
          <strong>+91 82963 20731</strong>
        </span>
      </a>

      <button
        className="mobile-menu"
        aria-label="Open navigation"
        onClick={() => {
          document
            .querySelector(".navbar-links")
            ?.classList.toggle("navbar-links-open");
        }}
      >
        <FaBars />
      </button>
    </nav>
  );
}

export default Navbar;