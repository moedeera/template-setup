import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

import { loginUser } from "../../Context/APcalls/localStorage";
import { sometimesReturnValue } from "../../Context/FetchFunction/FetchFunction";
import { Loading } from "../../Components/Loading/Loading";

export const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/redirect/login");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Redirect to profile page if no error
    let serverResponse;
    try {
      serverResponse = await loginUser(userInfo.email, userInfo.password);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
      return;
    }

    try {
      console.log("it continued");
      const response = await sometimesReturnValue(serverResponse);
      localStorage.setItem("token", JSON.stringify(serverResponse));
      console.log(response);
      setError("");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="login-form">
          {error && <small className="form-error">{error}</small>}
          <br />
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
      )}
    </div>
  );
};
