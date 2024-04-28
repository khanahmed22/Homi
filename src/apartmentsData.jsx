import b1 from "/images/b1.webp";
import g1 from "/images/apartment.webp";
import b2 from "/images/b2.webp";
import b3 from "/images/b3.webp";
import b4 from "/images/b4.webp";
import b5 from "/images/b5.webp";
import b6 from "/images/building.webp";
import mid from "/images/mid.webp";

export const apartmentsData = [
  {
    id: 1,
    name: "Sun View Apartments",
    price: "$60,000",
    image: b1,
    address: "Eastern Side · 600 Sq ft.",
    condition: "Excellent - in a good shape & well maintained",
    builder: "Metropolis Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24066.632926090333!2d-75.79673716555497!3d41.06179806213954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c50058033a0731%3A0x30fbdfa00452c796!2sEast%20Side%2C%20PA%2018661%2C%20USA!5e0!3m2!1sen!2s!4v1709576841390!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 2,
    name: "Belle View Apartments",
    price: "$40,000",
    image: g1,
    address: "Gulistan-e-Johar · 550 Sq ft.",
    condition: "Excellent - in a good shape & well maintained",
    builder: "Sultan Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.131971254778!2d67.02582587453766!3d24.825160077952365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dbf316add73%3A0x2eebb6caf8bf7c5b!2sBelle%20View%20Apartments%2C%20Block%205%20Clifton%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709577582222!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 3,
    name: "Aztec Apartments",
    price: "$30,000",
    image: b2,
    address: "Fishers · 200 Sq ft.",
    condition: "Excellent - in a good shape & well maintained",
    builder: "Bane Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.7300797048324!2d-117.0765977251083!3d32.77289597366531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9568149684089%3A0x98fc8a2ff2001228!2sAztec%20Campus%20Apartments!5e0!3m2!1sen!2s!4v1709577702914!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 4,
    name: "Sun Beam Apartments",
    price: "$50,000",
    image: b3,
    address: "Chicago · 300 Sq ft.",
    condition: "Excellent - in a good shape & well maintained",
    builder: "Sun Beam Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2032127062284!2d67.13588177454146!3d24.925146277887112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338f7085f418d%3A0xded3784aae1c4a52!2sSun%20Beam%20Apartment!5e0!3m2!1sen!2s!4v1709577783300!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 5,
    name: "Ester Apartments",
    price: "$60,000",
    image: b4,
    address: "Amarylis · 550 Sq ft.",
    condition: "Excellent - in a good shape & well maintained",
    builder: "Anne & Dave Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.02986192578!2d36.97333337404873!3d-1.1390888988499959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47ed735c6b6f%3A0x7a9d235cee42b859!2sEster%20Apartments!5e0!3m2!1sen!2s!4v1709578718907!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 6,
    name: "Mary Gold Apartments",
    price: "$15,000",
    image: b5,
    address: "Toronto · 530 Sq ft.",
    condition: "Excellent - in a good shape & well maintained",
    builder: "Mary Gold Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.037562910713!2d72.8331565717186!3d19.19356164233176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6e85928a633%3A0xa26957df30956481!2sMarigold%20Apartments%2C%20D&#39;Monte%20Ln%2C%20Malad%2C%20Orlem%2C%20Kanchpada%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064%2C%20India!5e0!3m2!1sen!2s!4v1709578840524!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 7,
    name: "Iris Apartments",
    price: "$39,000",
    image: b6,
    address: "Riverside · 230 Sq ft.",
    condition: "Excellent - in a good shape & well maintained",
    builder: "Barry Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120405.5832201908!2d72.67374644335936!3d19.426465999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9684355f32b%3A0xb0474087019c397b!2sIris%20Apartment!5e0!3m2!1sen!2s!4v1709578960244!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    id: 8,
    name: "Dahlia Apartments",
    price: "$50,000",
    image: mid,
    address: "Riyadh · 350 Sq ft.",
    condition: "Excellent - in a good shape & well maintained",
    builder: "Sheikh Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484315.88115270715!2d73.28340497343751!3d18.4964366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12841ef9f6d%3A0x8b225c08e5ff94ba!2sDahlia%20Apartments!5e0!3m2!1sen!2s!4v1709579028397!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
];
