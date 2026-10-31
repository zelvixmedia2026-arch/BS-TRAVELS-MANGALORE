import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-label">
          <span className="about-label-line"></span>
          ABOUT BS TRAVELS
        </div>

        <div className="about-main">
          <div className="about-heading">
            <h2>
              Every Journey Has a Story.
              <span> Let Us Be Part of Yours.</span>
            </h2>
          </div>

          <div className="about-description">
            <p>
              At BS Travels, we believe every journey deserves comfort,
              convenience, and care. Whether you're travelling across
              the city, heading to the airport, or planning a long-distance
              trip, we're here to make your travel experience smooth and
              hassle-free.
            </p>

            <a href="#services" className="about-link">
              DISCOVER OUR SERVICES
              <span className="about-link-icon">
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>

        <div className="about-divider"></div>

        <div className="about-values">
          <div className="about-value">
            <span className="about-value-number">01</span>
            <div>
              <h3>Comfort</h3>
              <p>Enjoy a comfortable journey from start to destination.</p>
            </div>
          </div>

          <div className="about-value">
            <span className="about-value-number">02</span>
            <div>
              <h3>Convenience</h3>
              <p>Travel solutions designed around your journey.</p>
            </div>
          </div>

          <div className="about-value">
            <span className="about-value-number">03</span>
            <div>
              <h3>Commitment</h3>
              <p>Focused on making every trip a better experience.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;