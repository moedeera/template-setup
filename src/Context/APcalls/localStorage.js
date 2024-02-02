import { sometimesReturnValue } from "../FetchFunction/FetchFunction.jsx";

let userData = [
  { id: 1, name: "John Smith", token: 112233 },
  { id: 2, name: "Kevin Jones", token: 223344 },
  { id: 3, name: "Wesley James", token: 445566 },
];

const loginUser = async (email, password) => {
  try {
    const data = localStorage.getItem("user-data");
    if (!data) {
      throw new Error("User data not found.");
    }
    const userData = JSON.parse(data);

    const matchingUser = userData.find((user) => user.email === email);
    if (!matchingUser) {
      return "No matching email found";
    }

    if (matchingUser.password !== password) {
      return "Invalid Password";
    }

    // Simulate successful login with delay and possible error
    return await sometimesReturnValue(matchingUser.token);
  } catch (error) {
    console.error("Error:", error.message);
    return "Database Error";
  }
};

export { loginUser };
