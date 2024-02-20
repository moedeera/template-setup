let userData = [
  { id: 1, name: "John Smith", token: 112233 },
  { id: 2, name: "Kevin Jones", token: 223344 },
  { id: 3, name: "Wesley James", token: 445566 },
];

// const loginUser = async (email, password) => {
//   try {
//     const data = localStorage.getItem("user-data");
//     if (!data) {
//       throw new Error("User data not found.");
//     }
//     const userData = JSON.parse(data);

//     const matchingUser = userData.find((user) => user.email === email);
//     if (!matchingUser) {
//       throw new Error("No matching email found");
//     }

//     if (matchingUser.password !== password) {
//       throw new Error("Invalid Password");
//     }

//     // Simulate successful login with delay and possible error
//     return matchingUser.token;
//   } catch (error) {
//     console.error("Error:", error.message);
//     return "Database Error";
//   }
// };
// const loginUser = async (email, password) => {
//   try {
//     const data = localStorage.getItem("user-data");
//     if (!data) {
//       // Directly return an error object without throwing
//       return { success: false, message: "User data not found." };
//     }
//     const userData = JSON.parse(data);

//     const matchingUser = userData.find((user) => user.email === email);
//     if (!matchingUser) {
//       return { success: false, message: "No matching email found" };
//     }

//     if (matchingUser.password !== password) {
//       return { success: false, message: "Invalid Password" };
//     }

//     // Return success true and the token when login is successful
//     return { success: true, token: matchingUser.token };
//   } catch (error) {
//     // Return a generic error message in case of unexpected errors
//     console.error("Error:", error.message); // Log the specific error for debugging purposes
//     return {
//       success: false,
//       message: "Login process failed due to an unexpected error.",
//     };
//   }
// };
// const loginUser = async (email, password) => {
//   const data = localStorage.getItem("user-data");
//   if (!data) {
//     throw new Error("User data not found.");
//   }
//   const userData = JSON.parse(data);

//   const matchingUser = userData.find((user) => user.email === email);
//   if (!matchingUser) {
//     throw new Error("No matching email found");
//   }

//   if (matchingUser.password !== password) {
//     throw new Error("Invalid Password");
//   }

//   // If execution reaches here, login is successful
//   return { success: true, token: matchingUser.token };
// };
const loginUser = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms delay

  const data = localStorage.getItem("user-data");
  if (!data) {
    throw new Error("User data not found.");
  }
  const userData = JSON.parse(data);

  const matchingUser = userData.find((user) => user.email === email);
  if (!matchingUser) {
    throw new Error("No matching email found");
  }

  if (matchingUser.password !== password) {
    throw new Error("Invalid Password");
  }

  // If execution reaches here, login is successful
  return { success: true, token: matchingUser.token };
};

export { loginUser };
