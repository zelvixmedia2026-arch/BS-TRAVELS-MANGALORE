

import { FaStar, FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    name: "Zubaida K.",
    review:
      "Fantastic service! Booked an Innova for a family trip from Suralpady to Subrahmanya Temple. The vehicle was spotless, smelling fresh, and the driver was extremely polite and punctual. Highly recommended for local and long-distance travel.",
  },
  {
    name: "Rishab N.",
    review:
      "Booked sleeper seats for an overnight journey. Seats were super comfortable, AC was working great, and they provided clean blankets and water bottles. Driver drove very smoothly through the ghat section.",
  },
  {
    name: "Manish Gowda",
    review:
      "Good experience with BS Travels. Staff behavior at the booking office was very helpful. The bus reached on time without unnecessary long delays. Overall, a hassle-free trip.",
  },
  {
    name: "Praveen Shetty",
    review:
      "We rented an AC Tempo Traveller for a 3-day Coorg trip from Mangalore. Driver local knowledge was excellent—he suggested great food spots along the way. Fair pricing with transparent billing.",
  },
  {
    name: "Sneha Rao",
    review:
      "I had to catch an early morning flight from Mangalore Airport (IXE). Booked a cab late at night, and the driver arrived 10 minutes early. Smooth ride, very professional.",
  },
  {
    name: "Jatin M.",
    review:
      "Super comfortable seats and ice-cold AC cooling. Mobile charging points at every seat were working properly. Enjoyed the ride thoroughly.",
  },
  {
    name: "Sonam Kumari",
    review:
      "A wonderful and smooth experience overall. The bus interiors were well-maintained and clean. Would definitely choose BS Travels again when traveling in coastal Karnataka.",
  },
];

function Reviews() {
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-heading">
        <span className="reviews-eyebrow">TRAVELLER EXPERIENCES</span>
        <h2>Every Journey, <span>Worth Remembering.</span></h2>
        <p>
          Discover the comfort and convenience that make every journey special.
        </p>
      </div>

      <div className="reviews-marquee">
        <div className="reviews-track">
          {marqueeReviews.map((review, index) => (
            <article className="review-card" key={`${review.name}-${index}`}>
              <div className="review-card-top">
                <div className="review-stars" aria-label="Demo rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <FaQuoteRight className="review-quote-icon" />
              </div>

              <p className="review-text">{review.review}</p>

              <div className="review-author">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3>{review.name}</h3>
                  <span>{review.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;