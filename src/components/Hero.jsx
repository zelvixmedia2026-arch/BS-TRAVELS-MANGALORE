import { useEffect, useState } from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const slides = [
  {
    eyebrow: "TRAVEL IN COMFORT",
    title: "Every Journey",
    highlight: "Begins With Us.",
    description:
      "Experience comfortable rides, professional service, and memorable journeys with BS Travels.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85",
    button: "Explore Our Services",
  },
  {
    eyebrow: "YOUR JOURNEY, OUR PRIORITY",
    title: "Discover More.",
    highlight: "Travel Better.",
    description:
      "From city rides to long-distance journeys, we're here to make every trip comfortable and convenient.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85",
    button: "Discover More",
  },
  {
    eyebrow: "COMFORT MEETS CONVENIENCE",
    title: "Your Destination.",
    highlight: "Our Commitment.",
    description:
      "Travel with confidence and enjoy a seamless experience from pickup to destination.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=85",
    button: "Book Your Ride",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="hero" id="home">
      <div className="hero-backgrounds">
        {slides.map((item, index) => (
          <div
            key={item.title}
            className={`hero-background ${
              currentSlide === index ? "hero-background-active" : ""
            }`}
            style={{ backgroundImage: `url("${item.image}")` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content" key={currentSlide}>
          <span className="hero-eyebrow">
            <span className="eyebrow-line" />
            {slide.eyebrow}
          </span>

          <h1>
            {slide.title}
            <br />
            <span>{slide.highlight}</span>
          </h1>

          <p>{slide.description}</p>

          <div className="hero-buttons">
            <a href="#services" className="hero-primary-btn">
              {slide.button}
              <FaArrowRight />
            </a>

            <a href="tel:+918296320731" className="hero-secondary-btn">
              <FaPhoneAlt />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;