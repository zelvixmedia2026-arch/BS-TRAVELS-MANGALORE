
import {
  FaCar,
  FaMapMarkerAlt,
  FaPlane,
  FaUsers,
  FaRoute,
  FaShuttleVan,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  { title: "Taxi & Cab Service", icon: <FaCar /> },
  { title: "Local Cab Service", icon: <FaMapMarkerAlt /> },
  { title: "Sedan & SUV", icon: <FaCar /> },
  { title: "Tempo Traveller", icon: <FaShuttleVan /> },
  { title: "Airport Transfers", icon: <FaPlane /> },
  { title: "Airport Pickup & Drop", icon: <FaPlane /> },
  { title: "Outstation Travel", icon: <FaRoute /> },
  { title: "Long-Distance Journeys", icon: <FaRoute /> },
  { title: "Family & Group Travel", icon: <FaUsers /> },
];

function Services() {
  const marqueeServices = [...services, ...services];

  return (
    <section className="services-section" id="services">
      {/* Cloud-style curved divider */}
      <div className="services-wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 180V105
            C45 105 45 35 105 35
            C165 35 175 95 225 95
            C275 95 285 55 335 55
            C385 55 400 110 455 110
            C510 110 520 65 575 65
            C630 65 650 125 705 125
            C760 125 770 35 835 35
            C900 35 915 100 970 100
            C1025 100 1045 0 1110 0
            C1175 0 1190 75 1250 75
            C1310 75 1340 40 1380 40
            C1415 40 1425 95 1440 105
            V180Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Services heading */}
      <div className="services-content">
        <div className="services-heading">
          <span className="services-eyebrow">TRAVEL YOUR WAY</span>

          <h2>
            Services Designed <span>Around You.</span>
          </h2>

          <p>
            From local rides to airport transfers and long-distance journeys,
            we're here to make every trip comfortable and convenient.
          </p>
        </div>

        {/* Scrolling services marquee */}
        <div className="services-marquee">
          <div className="services-track">
            {marqueeServices.map((service, index) => (
              <div
                className="service-marquee-card"
                key={`${service.title}-${index}`}
              >
                <span className="service-icon">{service.icon}</span>

                <span className="service-title">{service.title}</span>

                <FaArrowRight className="service-arrow" />
              </div>
            ))}
          </div>
        </div>

        {/* Brand tagline */}
        <div className="services-bottom-line">
          COMFORT <span>•</span> CONVENIENCE <span>•</span> EVERY JOURNEY
        </div>
      </div>
    </section>
  );
}

export default Services;
