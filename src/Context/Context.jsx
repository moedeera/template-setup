import { createContext, useEffect, useState } from "react";
import { sometimesReturnValue } from "./FetchFunction/FetchFunction";
// Naming the context with PascalCase
export const SiteContext = createContext({});

const fetchUser = () => {
  // Parsing the user object from localStorage
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user || null;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null;
  }
};

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  const fetchedUser = fetchUser();

  const [user, setUser] = useState(fetchedUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <SiteContext.Provider
      value={{
        user,
        setUser,
        sometimesReturnValue,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
