
import { FaArrowRight, FaUsers } from "react-icons/fa";

const vehicles = [
  {
    name: "Maruti Suzuki Swift Dzire",
    category: "SEDAN",
    description: "Comfortable and convenient travel for everyday journeys.",
    image: "/images/swift-dzire.jpg",
    passengers: "4 Passengers",
  },
  {
    name: "Toyota Etios",
    category: "SEDAN",
    description: "A practical choice for city rides and outstation trips.",
    image: "/images/etios.jpg",
    passengers: "4 Passengers",
  },
  {
    name: "Hyundai Aura",
    category: "SEDAN",
    description: "Enjoy a smooth ride with comfort and convenience.",
    image: "/images/hyundai-aura.jpg",
    passengers: "4 Passengers",
  },
  {
    name: "Maruti Suzuki Ertiga",
    category: "MUV",
    description: "A spacious option for family travel and group outings.",
    image: "/images/ertiga.jpg",
    passengers: "Confirm capacity",
  },
  {
    name: "Toyota Innova Crysta",
    category: "PREMIUM MUV",
    description: "Enjoy comfortable travel for family and business trips.",
    image: "/images/innova-crysta.jpg",
    passengers: "Confirm capacity",
  },
  {
    name: "Kia Carens",
    category: "FAMILY MUV",
    description: "A versatile vehicle for family outings and longer journeys.",
    image: "/images/kia-carens.jpg",
    passengers: "Confirm capacity",
  },

  {
  name: "Tempo Traveller",
  category: "Group Travel",
  image: "/images/tempo-traveller.jpg",
  capacity: "12–17 Passengers",
  description: "Spacious and comfortable travel for family trips, group tours, and outstation journeys."
},

];

function Fleet() {
  const whatsappNumber = "918296320731"; // Replace with the actual BS Travels WhatsApp number.

  const handleEnquiry = (vehicleName) => {
    const message = `Hello BS Travels! I would like to enquire about the ${vehicleName}. Please share the details and pricing.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="fleet-section" id="fleet">
      <div className="fleet-container">
        <div className="fleet-heading">
          <span className="fleet-eyebrow">TRAVEL IN COMFORT</span>

          <h2>
            Find Your Perfect <span>Ride.</span>
          </h2>

          <p>
            From everyday city rides to comfortable family journeys,
            choose the vehicle that suits your travel needs.
          </p>
        </div>

        <div className="fleet-grid">
          {vehicles.map((vehicle) => (
            <article className="fleet-card" key={vehicle.name}>
              <div className="fleet-image-wrapper">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="fleet-image"
                  loading="lazy"
                />

                <span className="fleet-category">{vehicle.category}</span>
              </div>

              <div className="fleet-card-content">
                <h3>{vehicle.name}</h3>

                <p className="fleet-description">
                  {vehicle.description}
                </p>

                <div className="fleet-passengers">
                  <FaUsers />
                  <span>{vehicle.passengers}</span>
                </div>

                <button
                  className="fleet-enquire-button"
                  onClick={() => handleEnquiry(vehicle.name)}
                >
                  Enquire Now
                  <FaArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fleet;