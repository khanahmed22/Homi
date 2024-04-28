import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="Homi-intro">
          <h1>Homi</h1>
          <p>
            "Unlock the Door to Your Perfect Abode - Your Key to Home
            Happiness!"
          </p>
          <p className="call-to-action">Start Searching for your ideal Home!</p>

          <button className="start-search-btn">
            <Link to="/properties/apartments" aria-label="Browse Our Listings">
              Start Searching
              <svg
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
              </svg>
            </Link>
          </button>
        </div>

        <div>
          <svg
            className="hero-svg"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 849.96692 718.3575"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M827.73468,757.23307H442.84113a9.01031,9.01031,0,0,1-9-9V485.41129a9.01031,9.01031,0,0,1,9-9H827.73468a9.01031,9.01031,0,0,1,9,9V748.23307A9.01031,9.01031,0,0,1,827.73468,757.23307Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#fff"
            />
            <path
              d="M827.73468,757.23307H442.84113a9.01031,9.01031,0,0,1-9-9V485.41129a9.01031,9.01031,0,0,1,9-9H827.73468a9.01031,9.01031,0,0,1,9,9V748.23307A9.01031,9.01031,0,0,1,827.73468,757.23307ZM442.84113,478.41129a7.00786,7.00786,0,0,0-7,7V748.23307a7.00786,7.00786,0,0,0,7,7H827.73468a7.00787,7.00787,0,0,0,7-7V485.41129a7.00787,7.00787,0,0,0-7-7Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <path
              d="M679.8421,755.65152H590.7337V608.132a13.21172,13.21172,0,0,1,13.19678-13.19677h62.71484A13.21171,13.21171,0,0,1,679.8421,608.132Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#e6e6e6"
            />
            <path
              d="M806.74347,420.38834H755.85553v-85.044a9.01031,9.01031,0,0,1,9-9h32.88794a9.01031,9.01031,0,0,1,9,9Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#fff"
            />
            <path
              d="M806.74347,420.38834H755.85553v-85.044a9.01031,9.01031,0,0,1,9-9h32.88794a9.01031,9.01031,0,0,1,9,9Zm-48.88794-2h46.88794v-83.044a7.00787,7.00787,0,0,0-7-7H764.85553a7.00787,7.00787,0,0,0-7,7Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <circle cx="344.81988" cy="267.38662" r="97.99154" fill="#f2f2f2" />
            <path
              d="M782.82428,311.4352c-8.82523-.27745-16.681-8.32642-16.74407-17.15579s7.677-16.98968,16.49741-17.39311c19.6396-.8983,35.71928-21.9745,31.39744-41.15371s-27.88707-31.32183-46.0138-23.70986c-13.90516,5.83921-27.95653-12.559-24.43223-27.22289s16.86045-24.51079,29.19991-33.18187,25.5395-18.85193,28.5179-33.63635S788.97846,85.48714,775.544,92.34033"
              transform="translate(-175.01654 -90.82125)"
              fill="#e6e6e6"
            />
            <path
              d="M553.097,637.78678h-75.2705A11.33727,11.33727,0,0,1,466.502,626.46207v-62.0542a11.33717,11.33717,0,0,1,11.32447-11.32422H553.097a11.33711,11.33711,0,0,1,11.32422,11.32422v62.0542A11.33722,11.33722,0,0,1,553.097,637.78678Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#e6e6e6"
            />
            <path
              d="M794.49078,637.78678h-75.2705a11.33727,11.33727,0,0,1-11.32447-11.32471v-62.0542a11.33717,11.33717,0,0,1,11.32447-11.32422h75.2705a11.33717,11.33717,0,0,1,11.32447,11.32422v62.0542A11.33727,11.33727,0,0,1,794.49078,637.78678Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#e6e6e6"
            />
            <path
              d="M405.10454,481.81683V441.37965a17.62168,17.62168,0,0,1,8.87747-15.29911L638.65774,297.66692a17.62169,17.62169,0,0,1,18.22029.44219L857.32558,425.959a17.62169,17.62169,0,0,1,8.14562,14.85692v41.0009a17.62169,17.62169,0,0,1-17.62169,17.62169H422.72623A17.62169,17.62169,0,0,1,405.10454,481.81683Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#6c63ff"
            />
            <path
              d="M847.84967,481.43522H422.72614a17.62179,17.62179,0,0,1-17.62159-17.62171v16a17.62179,17.62179,0,0,0,17.62159,17.62171H847.84967a17.62179,17.62179,0,0,0,17.62158-17.62171v-16A17.62179,17.62179,0,0,1,847.84967,481.43522Z"
              transform="translate(-175.01654 -90.82125)"
              opacity="0.2"
            />
            <path
              d="M882.36676,619.811c0-31.00945,25.13812-104.59333,56.14757-104.59333S994.6619,588.80155,994.6619,619.811a56.14757,56.14757,0,0,1-112.29514,0Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#f2f2f2"
            />
            <path
              d="M938.51422,756.03971a1.00006,1.00006,0,0,1-1-1V553.42887a1,1,0,0,1,2,0V755.03971A1.00005,1.00005,0,0,1,938.51422,756.03971Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <path
              d="M938.514,642.83463a.99987.99987,0,0,1-.72364-1.68994L966.33258,611.193a1,1,0,1,1,1.44775,1.37988L939.2381,642.52457A.99758.99758,0,0,1,938.514,642.83463Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <path
              d="M938.514,592.33658a.99506.99506,0,0,1-.67456-.2622l-24.666-22.55176A.99985.99985,0,1,1,914.523,568.047l24.666,22.55176a.99987.99987,0,0,1-.67505,1.73779Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <path
              d="M197.04452,558.11275c0-45.61616,36.97921-153.86107,82.59538-153.86107s82.59537,108.24491,82.59537,153.86107a82.59537,82.59537,0,1,1-165.19075,0Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#6c63ff"
            />
            <path
              d="M279.64,758.03971a1.00006,1.00006,0,0,1-1-1V460.46158a1,1,0,0,1,2,0V757.03971A1.00005,1.00005,0,0,1,279.64,758.03971Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <path
              d="M279.63983,591.50992a.99993.99993,0,0,1-.72375-1.68994l41.98657-44.06006a1.0001,1.0001,0,1,1,1.448,1.37989l-41.98682,44.06A.99749.99749,0,0,1,279.63983,591.50992Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <path
              d="M279.63971,517.22574a.99684.99684,0,0,1-.67456-.26172l-36.28491-33.17529a1,1,0,0,1,1.34961-1.47607L280.31476,515.488a.99987.99987,0,0,1-.675,1.73779Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <path
              d="M899.292,755.94091c.09458.07323.19447.139.29025.21061h81.31009c1.59324-6.45522,2.15584-12.91734-.224-18.5292-3.39086-7.99658-13.42583-12.98824-21.40387-9.55417a12.18227,12.18227,0,0,0-4.7848,3.78579c-3.11778-5.5809-8.71044-9.78873-15.16588-9.78414-8.08761.00578-14.812,6.6197-17.00656,14.25942-3.53357-5.96467-10.51339-10.133-17.33575-8.33989C893.561,730.98844,889.9568,748.72629,899.292,755.94091Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#e6e6e6"
            />
            <path
              d="M200.75739,757.72635c.19091.14783.39257.28058.58593.42517H365.4859c3.21631-13.03131,4.352-26.07653-.45215-37.40533-6.84521-16.14288-27.103-26.21967-43.20849-19.28723a24.59235,24.59235,0,0,0-9.65918,7.64245c-6.29395-11.26629-17.584-19.76074-30.61573-19.75146-16.32666.01166-29.90136,13.36334-34.33154,28.78583-7.1333-12.041-21.22363-20.45581-34.99609-16.83594C189.18805,707.35422,181.91217,743.162,200.75739,757.72635Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#e6e6e6"
            />
            <rect
              x="175.01766"
              y="756.04239"
              transform="translate(-176.44786 -89.68465) rotate(-0.10841)"
              fill="#3f3d56"
            />
            <path
              d="M461.83063,714.53922a5.58215,5.58215,0,0,0-4.99018-6.9544l-31.75706-39.70417-7.85767,7.32391,33.54766,37.92664a5.61238,5.61238,0,0,0,11.05725,1.408Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#ffb8b8"
            />
            <path
              d="M431.17561,674.18777l-10.03625,7.686a2.50295,2.50295,0,0,1-3.71043-.77285l-6.11369-11.02077a6.95117,6.95117,0,0,1,11.06214-8.42036l9.01919,8.74434a2.50294,2.50294,0,0,1-.221,3.78362Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <circle cx="239.30421" cy="546.63506" r="12.76243" fill="#ffb8b8" />
            <polygon
              points="266.547 712.182 272.918 712.182 272.311 700.259 262.909 700.259 266.547 712.182"
              fill="#ffb8b8"
            />
            <path
              d="M439.93877,800.92367l12.54563-.00051h.00051a7.99493,7.99493,0,0,1,7.99514,7.995v.25981l-20.5409.00076Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#2f2e41"
            />
            <polygon
              points="198.626 703.163 204.046 706.511 209.796 696.048 203.238 691.945 198.626 703.163"
              fill="#ffb8b8"
            />
            <path
              d="M373.35318,791.36055l10.67349,6.59314.00043.00027a7.99489,7.99489,0,0,1,2.6,11.00375l-.13654.221-17.47562-10.795Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#2f2e41"
            />
            <path
              d="M441.10319,799.50773a2.33364,2.33364,0,0,1-2.18124-1.50761l-23.04323-55.09357a.77963.77963,0,0,0-1.3772-.16745L382.84458,792.608a2.3297,2.3297,0,0,1-2.92985.81546l-4.33166-2.02165a2.34783,2.34783,0,0,1-1.14466-3.07612l25.93552-57.81244c-.56618-1.37771-6.08995-15.5242,2.397-22.51321l.05937-.037L425.844,697.69746l.58027,17.65394,22.93831,79.58782a2.33813,2.33813,0,0,1-1.65185,2.90917l-6.00838,1.58119A2.3458,2.3458,0,0,1,441.10319,799.50773Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#2f2e41"
            />
            <path
              d="M426.19224,671.87364c-.87636-3.51705-2.11858-7.06208-3.78324-8.69871a21.07512,21.07512,0,0,1-1.72239-1.89688,12.61285,12.61285,0,0,0-4.13147-3.38538c.5866-.32638.93039-.71568.93039-1.13467,0-1.14793-2.559-2.07849-5.71583-2.07849s-5.71584.93056-5.71584,2.07849a1.01444,1.01444,0,0,0,.33974.70021,12.16305,12.16305,0,0,0-7.51992,10.14042c-.73821,7.90649-.95374,18.01294,1.63346,24.40564a23.53415,23.53415,0,0,1,.48549,16.58574,2.07557,2.07557,0,0,0,2.74806,2.58209l22.83568-9.20216a2.07838,2.07838,0,0,0,1.30159-1.92784V686.06577A58.69352,58.69352,0,0,0,426.19224,671.87364Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <path
              d="M382.49981,729.4377a5.58211,5.58211,0,0,0,3.86835-7.63553l17.867-47.11723-9.06061-2.33932-16.52613,46.632a5.61238,5.61238,0,0,0,3.85136,10.46Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#ffb8b8"
            />
            <path
              d="M404.16068,683.6253l-11.449-5.35915a2.503,2.503,0,0,1-1.02588-3.64859l6.958-10.50815A6.95116,6.95116,0,0,1,411.21756,670.04l-3.59793,12.036a2.50295,2.50295,0,0,1-3.45895,1.5493Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#3f3d56"
            />
            <path
              d="M426.04357,634.31507a2.90994,2.90994,0,0,0,1.67424-.30261c.94141-.61609.84866-2.01649.53017-3.09556A16.10894,16.10894,0,0,0,417.15283,620.12c-1.817-.48288-4.11591-.46422-5.15531,1.10233a13.12441,13.12441,0,0,0-16.97957,2.08557,17.781,17.781,0,0,0-3.98638,8.49312c-1.09056,5.34287-5.76085,16.36413-3.17377,21.16441,1.72156,3.19431,9.64434.70546,12.99569,2.09678a11.06842,11.06842,0,0,0,10.40159-.83966,8.48758,8.48758,0,0,0,3.26432-9.569,29.61151,29.61151,0,0,0-2.02429-3.68476,5.92935,5.92935,0,0,1-.87886-4.02305C412.0854,634.81144,422.15865,634.23507,426.04357,634.31507Z"
              transform="translate(-175.01654 -90.82125)"
              fill="#2f2e41"
            />
          </svg>
        </div>
      </div>

      <div className="in-a-click">
        <h2>
          Find your dream home in a click, where tech and personal service
          redefine real estate.
        </h2>
      </div>

      <div className="Grid-Home">
        <div className="Grid-Home-components">
          <img src="/images/stylish-home.webp" alt="A nice Home picture"></img>
          <p>Find your dream house in 2 clicks</p>
          <Link to="properties/houses" aria-label="Link to House Listings">
            <button>Let's Go</button>
          </Link>
        </div>

        <div className="Grid-Home-components">
          <img src="/images/building.webp" alt="a nice apartmemt picture"></img>
          <p>Find your dream apartment in 2 clicks</p>
          <Link
            to="properties/apartments"
            aria-label="Link to Apartment Listings"
          >
            <button>Let's Go</button>
          </Link>
        </div>

        <div className="Grid-Home-components">
          <img src="/images/rent.webp" alt="rent a apartment"></img>
          <p>Rent a beautiful apartment in 2 clicks</p>
          <Link
            to="properties/apartments"
            aria-label="Link to Apartment Listings"
          >
            <button>Let's Go</button>
          </Link>
        </div>
      </div>

      <br></br>

      <div className="recently-added-div">
        <br></br>
        <center>
          <h2>Recently Added</h2>
        </center>

        <div className="recently-added-grid">
          <div className="recently-added-components">
            <img src="/images/recent-home1.webp" alt="house 1"></img>
            <div className="recently-added-components-1">
              <h3>Nexus Homes</h3>
              <p>Riverside &#183; 700 Sq ft.</p>
            </div>
          </div>

          <div className="recently-added-components">
            <img src="/images/recent-home2.webp" alt="house 2"></img>

            <div className="recently-added-components-1">
              <h3>Green Orchid Homes</h3>
              <p>Riverside &#183; 700 Sq ft.</p>
            </div>
          </div>

          <div className="recently-added-components">
            <img src="/images/recent-building.webp" alt="house 3"></img>
            <div className="recently-added-components-1">
              <h3>Blue Edge Apartments</h3>
              <p>Riverside &#183; 700 Sq ft.</p>
            </div>
          </div>

          <div className="recently-added-components-more">
            <h1>Check Out More!</h1>
            <Link to="properties/houses" aria-label="Check Out Our Listings">
              <svg
                className="more-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-212.65 91.36a16 16 0 01-.09-22.63L303.58 272H170a16 16 0 010-32h133.58l-52.32-52.73A16 16 0 11274 164.73l79.39 80a16 16 0 010 22.54l-79.39 80a16 16 0 01-22.65.09z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-swiper">
        <center>
          <h2>Our Luxury Listings</h2>
        </center>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="swiper-div">
              <img
                src="/images/beaut-h1.webp"
                alt="slide_image"
                loading="lazy"
              />
              <p>Spanish Cottage</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-div">
              <img src="/images/mid.webp" alt="slide_image" loading="lazy" />
              <p>Dahlia Apartments</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-div">
              <img src="/images/wow.webp" alt="slide_image" loading="lazy" />
              <p>English Cottage</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-div">
              <img src="/images/white.webp" alt="slide_image" loading="lazy" />
              <p>Auburn Home</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-div">
              <img src="/images/green.webp" alt="slide_image" loading="lazy" />
              <p>Poppy Bungalow</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-div">
              <img src="/images/pond.webp" alt="slide_image" loading="lazy" />
              <p>Daisy Getaway</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-div">
              <img src="/images/bal.webp" alt="slide_image" loading="lazy" />
              <p>White Lotus Town House</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-div">
              <img src="/images/w1.webp" alt="slide_image" loading="lazy" />
              <p>Pearl Bungalow</p>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="caret-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="caret-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <div className="Grid-contact">
        <div className="contact-img">
          <img
            src="/images/blue-house.webp"
            alt="contact us"
            loading="lazy"
          ></img>
        </div>

        <div className="contact-text">
          <h2>Find your best Real Estate</h2>
          <p>
            We provide complete service for the sale, purchase or rental of real
            estate
          </p>
          <Link to="/contact" aria-label="Link to Our Contact Page">
            <button>
              <ion-icon name="call-outline"></ion-icon> &nbsp; Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
