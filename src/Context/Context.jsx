import { createContext, useEffect, useState } from "react";
import { sometimesReturnValue } from "./FetchFunction/FetchFunction";
import {
  fetchCurrentPage,
  generatePostData,
  generateUserData,
  searchForToken,
} from "./MockData/MockData";
// Naming the context with PascalCase
export const SiteContext = createContext({});

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  const fetchedToken = searchForToken();
  const fetchedCurrentPage = fetchCurrentPage();

  const [currentPage, setCurrentPage] = useState(fetchedCurrentPage);
  const [logState, setLogState] = useState(fetchedToken);

  useEffect(() => {
    generateUserData();
    generatePostData();
  }, []);

  useEffect(() => {
    // Correctly stringify currentPage when setting it in localStorage
    localStorage.setItem("current-page", JSON.stringify(currentPage));
  }, [currentPage]);
  useEffect(() => {
    // This effect could be adjusted or removed based on your actual needs.
    if (logState) {
      const token = localStorage.getItem("token");
      if (!token) {
        setLogState(false);
        // Logic to set token if logState is true but no token is found (optional)
      }
    } else {
      localStorage.removeItem("token");
    }
  }, [logState]);

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
