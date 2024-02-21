import "Login.css";
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

  return <div>Login</div>;
};
