import { Link } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";

export const Login = () => {
  // login
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  // loading
  const [loading, setLoading] = useState(false);
  // error
  const [error, setError] = useState("");
  // visibility
  const [visibility, setVisibility] = useState(false);

  // redirection
  useEffect(() => {
    console.log("checking to see if the user is logged");
  }, []);

  // handleOnChange

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  // submission function
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div className="login-form">
          {error && <small className="form-error">{error}</small>}
          <br />
          <form className="form-container">
            <div className="form-section">
              <label htmlFor="email">Email</label>
              <input
                className="login-form-input"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="form-section">
              <label htmlFor="password">Password</label>
              <input
                className="login-form-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-section">
              <label>
                <input type="checkbox" />
                Show password
              </label>
            </div>
            {/* ... */}
            <button type="submit" className="form-btn">
              Login
            </button>
            {/* ... */}
          </form>
          Go back to <Link to="/">Homepage</Link>
        </div>
      )}
    </div>
  );
};
