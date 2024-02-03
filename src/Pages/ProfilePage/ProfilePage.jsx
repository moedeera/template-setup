import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/redirect/profile");
    }
  }, []);
  return <div className="container">ProfilePage</div>;
};
