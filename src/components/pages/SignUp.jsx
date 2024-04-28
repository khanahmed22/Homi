import "./SignUp.css";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="container">
      <div className="sign-up-div">
        <svg
          id="logo-35"
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            className="ccompli1"
            fill="#007AFF"
          ></path>{" "}
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            className="ccustom"
            fill="#312ECB"
          ></path>{" "}
        </svg>
        <h1 className="title">Homi</h1>
        <h2 className="subtitle">Create Account</h2>
        <form>
          <p>Email</p>
          <input type="email" placeholder="Enter Email" required></input>
          <br></br>
          <p>Password</p>
          <input type="password" placeholder="Enter Password" required></input>
          <br></br>
          <center>
            <button className="signUp-btn">Create Account</button>
          </center>
          <p>
            Already have an Account?{" "}
            <span>
              <Link to="/signIn" aria-label="Log In to Account">
                Sign In
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
