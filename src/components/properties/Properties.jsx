import { NavLink, Outlet } from "react-router-dom";
import "./properties.css";

export function Properties() {
  return (
    <>
      <div className="search-box">
        <input placeholder="Browse Properties"></input>
        <button>
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M338.29 338.29L448 448"
            />
          </svg>
        </button>
      </div>

      <div className="btn-container">
        <button className="ap-selector">
          <NavLink to="apartments" aria-label="Go to Apartment Listings">
            Apartments
          </NavLink>
        </button>

        <button className="h-selector">
          <NavLink to="houses" aria-label="Go to House Listings">
            Houses
          </NavLink>
        </button>
      </div>

      <Outlet></Outlet>
    </>
  );
}
