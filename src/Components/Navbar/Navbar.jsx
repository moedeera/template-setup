import { useContext } from "react";

import { Link } from "react-router-dom";
import { SiteContext } from "../../Context/Context";

export const Navbar = () => {
  const { logState, setLogState, currentPage, setCurrentPage } =
    useContext(SiteContext);
  const links = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "Profile", to: "/profile" },
    { id: 3, name: "Posts", to: "/posts/all" },
  ];

  return (
    <div className="navbar">
      {links.map((link) => (
        <Link
          style={
            link.name === currentPage ? { textDecoration: "underline" } : {}
          }
          onClick={() => {
            setCurrentPage(link.name);
          }}
          key={link.id}
          to={link.to}
        >
          {link.name}
        </Link>
      ))}

      {logState ? (
        <button
          className="btn"
          onClick={() => {
            localStorage.removeItem("user");
            setLogState(false);
          }}
        >
          Logout
        </button>
      ) : (
        <Link
          style={currentPage === "Login" ? { textDecoration: "underline" } : {}}
          o
          onClick={() => {
            setCurrentPage("Login");
          }}
          to="/Login"
        >
          Login
        </Link>
      )}
    </div>
  );
};
