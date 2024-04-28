import h1_img from "/images/bal.webp";
import daisy from "/images/pond.webp";
import sant from "/images/house.webp";
import w1 from "/images/w1.webp";
import wow from "/images/wow.webp";
import white from "/images/white.webp";
import green from "/images/green.webp";
import rent from "/images/rent.webp";

export const housesData = [
  {
    id: 1,
    name: "White Lotus Town House",
    price: "$80,000",
    image: h1_img,
    address: "Riverside · 700 Sq ft.",
    builder: "Nexus Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.442349125931!2d67.08954357454131!3d24.916996377892318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f63afefcebb%3A0x65eb3b2716a85bbb!2sWhite%20lotus!5e0!3m2!1sen!2s!4v1709624738479!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 2,
    name: "Daisy Getaway",
    price: "$80,000",
    image: daisy,
    address: "Riverside · 700 Sq ft.",
    builder: "Olivia Housers",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.134689517292!2d145.22751067516222!3d-37.833732571970614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63be02da898f3%3A0xb1c98ae87d5608f4!2sDaisy%20Home!5e0!3m2!1sen!2s!4v1709624881181!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 3,
    name: "Santorini Bungalow",
    price: "$45,000",
    image: sant,
    address: "Fredericton · 700 Sq ft.",
    builder: "Byzantine Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.0027292853315!2d25.417952875983424!3d36.43331671125371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1499cd3b50ab4597%3A0xad1d7db85a2ce81e!2sSantorini%20home!5e0!3m2!1sen!2s!4v1709625059753!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 4,
    name: "Pearl Bungalow",
    price: "$50,000",
    image: w1,
    address: "Chicago · 700 Sq ft.",
    builder: "Maria Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.78305342336!2d81.21386307410758!3d8.616815591428997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbdc039e0e063%3A0xce7a9007e12b00d7!2sPearl%20Bungalow!5e0!3m2!1sen!2s!4v1709625180456!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 5,
    name: "English Cottage",
    price: "$90,000",
    image: wow,
    address: "Ohio · 500 Sq ft.",
    builder: "Sonya Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.4040292609393!2d120.8455343742063!3d14.053302986370706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9d657c039807%3A0x234073039f4d8016!2sEnglish%20Cottage%20House!5e0!3m2!1sen!2s!4v1709625309990!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 6,
    name: "Auburn Home",
    price: "$50,000",
    image: white,
    address: "Riverside · 700 Sq ft.",
    builder: "Alex Homes",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.6137743912273!2d151.02966397494635!3d-33.8480696732345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd76d4adcd17%3A0x889f5133c5c8170a!2sAuburn%20Home!5e0!3m2!1sen!2s!4v1709625424230!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 7,
    name: "Poppy Home",
    price: "$10,000",
    image: green,
    address: "Baku · 200 Sq ft.",
    builder: "Mehmet Builders",
    location: (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.449649799547!2d151.70025917490267!3d-32.99191887357451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7317d7bc615511%3A0x859881cdb4c66a9f!2sPoppy&#39;s%20Home%20%26%20Garden!5e0!3m2!1sen!2s!4v1709625499779!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },

  {
    id: 8,
    name: "Royal Bungalow",
    price: "$90,000",
    image: rent,
    address: "Milan · 800 Sq ft.",
    builder: "Luigi Builders",
    Location: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3168275269836!2d73.7721647099074!3d18.559749682468606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beca12c9aa0d%3A0xcbb19328ee771931!2sCarnation%20Life%20Spaces!5e0!3m2!1sen!2s!4v1710058892945!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
];
