import { useParams } from "react-router-dom";
import { housesData } from "../../housesData";

export function H1() {
  const { id } = useParams();
  return (
    <>
      <br></br>
      <div className="property-display-pg">
        <img
          className="house-img"
          src={housesData[id - 1].image}
          alt="house photo"
        ></img>
      </div>
      <br></br>

      <div className="property-name">
        <h2 className="house-name">{housesData[id - 1].name}</h2>

        <div className="enquire-container">
          <button>
            <svg
              className="call-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z" />
            </svg>
            <span className="call-text">Call</span>
          </button>

          <button>
            <svg
              className="mail-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
            </svg>
            <span className="mail-text">Enquire</span>
          </button>

          <button>
            <svg
              className="whatsapp-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                fill-rule="evenodd"
              />
            </svg>
            <span className="whatsapp-text">WhatsApp</span>
          </button>
        </div>
      </div>

      <div className="Grid-info">
        <div className="Grid-more-info">
          <h3>Description</h3>
          <p>{housesData[id - 1].address}</p>
          <h3>Price</h3>
          <p>{housesData[id - 1].price}</p>
        </div>

        <div className="features">
          <h3>Features</h3>
          <p>
            <span className="material-symbols-outlined">bolt</span>
            &nbsp; Electricity
          </p>
          <p>
            <span className="material-symbols-outlined">valve</span>
            &nbsp; Sewerage
          </p>
          <p>
            <span className="material-symbols-outlined">propane_tank</span>
            &nbsp; Gas
          </p>
          <p>
            <span className="material-symbols-outlined">water_drop</span>
            &nbsp; Water Supply
          </p>
        </div>
      </div>

      <div className="location-div">
        <div>
          <h3>
            Location <ion-icon name="location-sharp"></ion-icon>
          </h3>
          {housesData[id - 1].location}
        </div>

        <div className="builder-div">
          <div className="builder-pic">
            <img src="https://placehold.co/100x100"></img>
          </div>

          <div className="builder-profile">
            <h2>Posted By:</h2>
            <h3>
              {" "}
              <h3></h3>
              {housesData[id - 1].builder}
            </h3>
            <p>Check Profile &#x21C0; </p>
          </div>
        </div>
      </div>
    </>
  );
}
