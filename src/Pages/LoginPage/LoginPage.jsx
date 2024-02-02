import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { emailValidator } from "./ValidateEmail";
import { loginUser } from "../../Context/APcalls/localStorage";

export const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = emailValidator(userInfo.email);

    if (!valid) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    // Redirect to profile page if no error
    try {
      const token = await loginUser(userInfo.email, userInfo.password);
      console.log(token);
    } catch (error) {
      console.log(error);
    }

    // navigate("/account");
  };
  return (
    <div className="container">
      <div className="login-form">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-section">
            <label htmlFor="email">Email</label>
            <input
              className="login-form-input"
              type="email"
              name="email"
              id="email"
              value={userInfo.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            {emailError && (
              <small className="form-error">Please enter a valid email</small>
            )}
          </div>
          <div className="form-section">
            <label htmlFor="password">Password</label>
            <input
              className="login-form-input"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-section">
            <label>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
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
    </div>
  );
};
