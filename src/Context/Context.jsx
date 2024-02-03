import { createContext, useEffect, useState } from "react";
import { sometimesReturnValue } from "./FetchFunction/FetchFunction";
// Naming the context with PascalCase
export const SiteContext = createContext({});

const generateUserData = () => {
  let userData;
  try {
    let storedData = localStorage.getItem("user-data");

    // Check if userData exists and is not null
    if (storedData) {
      userData = JSON.parse(storedData); // Parse existing data
      console.log("Existing user data fetched");
    } else {
      // Generate new user data if not found
      userData = [
        { id: 1, email: "John@gmail.com", password: "123john", token: 112233 },
        {
          id: 2,
          email: "Kevin@gmail.com",
          password: "123kevin",
          token: 223344,
        },
        {
          id: 3,
          email: "Wesley@gmail.com",
          password: "123wesley",
          token: 445566,
        },
      ];
      localStorage.setItem("user-data", JSON.stringify(userData)); // Store serialized data
      console.log("New user data generated and saved");
    }

    return userData; // Return the userData
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null; // Return null or appropriate value on error
  }
};

const fetchCurrentPage = () => {
  try {
    let data = localStorage.getItem("current-page");
    return JSON.parse(data) || "Home";
  } catch (error) {
    console.error("Error parsing current page from localStorage:", error);
    return "Home";
  }
};

const searchForToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  const fetchedToken = searchForToken();
  const fetchedCurrentPage = fetchCurrentPage();

  const [currentPage, setCurrentPage] = useState(fetchedCurrentPage);
  const [logState, setLogState] = useState(fetchedToken);

  useEffect(() => {
    generateUserData();
  }, []);

  return (
    <SiteContext.Provider
      value={{
        sometimesReturnValue,
        logState,
        setLogState,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
