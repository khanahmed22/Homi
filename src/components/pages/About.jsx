import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <div className="story-div">
        <h1>
          Our Story &nbsp; <ion-icon name="book-outline"></ion-icon>
        </h1>
      </div>

      <div className="founder-div">
        <img src="/images/founder.webp"></img>
        <div className="founder-info">
          <h1>Our Founder</h1>
          <p>
            Our founder <span>John Doe</span> had a dream to modernize the real
            estate sector in Vinland and bring it close to international
            standards. With a team of talented and hardworking individuals he
            launched Homi.
          </p>
        </div>
      </div>

      <div className="team-div">
        <div className="team-info">
          <h1>Our Team</h1>
          <p>
            Our Team consists of Amazing, Diverse, Talented and Hardworking
            individuals and we believe everyone deserves a warm cozy Home and we
            want to make it as easy as possible.
          </p>
        </div>
        <img src="/images/team.webp"></img>
      </div>

      <div className="begin-search">
        <h2>Now you know our story, but are you ready to start your search?</h2>
        <Link to="/properties/houses" aria-label="Go to Our Listings">
          <button>Let's Begin</button>
        </Link>
      </div>
    </>
  );
}
