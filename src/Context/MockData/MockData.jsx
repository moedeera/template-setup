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
        { id: 0, email: "Tim@gmail.com", password: "123Admin", token: 110033 },

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
    if (data) {
      console.log("it exists");
      return JSON.parse(data); // Assuming the value is always correctly stored as JSON string
    } else {
      const defaultPage = "Home";
      localStorage.setItem("current-page", JSON.stringify(defaultPage)); // Ensure consistency
      console.log("it does not exist, setting to Home");
      return defaultPage;
    }
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

const generatePostData = () => {
  let postData;
  try {
    let storedData = localStorage.getItem("posts-data");

    // Check if userData exists and is not null
    if (storedData) {
      postData = JSON.parse(storedData); // Parse existing data
      console.log("Existing post data fetched");
    } else {
      // Generate new user data if not found
      postData = [
        {
          id: 1,
          author: "Tim@gmail.com",
          authorId: 0,
          text: "Welcome to the site by Tim@gmail.com",
          created: "2024-01-15T06:38:47.748Z",
          lastEdited: "2024-01-22T17:38:10.628Z",
          public: false,
        },
        {
          id: 2,
          author: "John@gmail.com",
          authorId: 1,
          text: "The future of web development by John@gmail.com",
          created: "2024-01-30T19:53:20.332Z",
          lastEdited: "2024-01-30T19:53:20.332Z",
          public: false,
        },
        {
          id: 3,
          author: "John@gmail.com",
          authorId: 1,
          text: "The tough economy by John@gmail.com",
          created: "2024-01-31T05:17:15.178Z",
          lastEdited: "2024-01-31T05:17:15.178Z",
          public: true,
        },
        {
          id: 4,
          author: "John@gmail.com",
          authorId: 1,
          text: "NodeJS vs. Firebase by John@gmail.com",
          created: "2024-01-08T14:20:18.001Z",
          lastEdited: "2024-01-26T15:50:42.399Z",
          public: true,
        },
        {
          id: 5,
          author: "Kevin@gmail.com",
          authorId: 2,
          text: "What I've learned from GPT by Kevin@gmail.com",
          created: "2024-01-17T14:13:00.706Z",
          lastEdited: "2024-01-27T09:37:07.213Z",
          public: true,
        },
        {
          id: 6,
          author: "Kevin@gmail.com",
          authorId: 2,
          text: "Typescript vs. JavaScript by Kevin@gmail.com",
          created: "2024-01-25T00:11:45.370Z",
          lastEdited: "2024-01-25T00:11:45.370Z",
          public: true,
        },
        {
          id: 7,
          author: "Kevin@gmail.com",
          authorId: 2,
          text: "The future of web development by Kevin@gmail.com",
          created: "2024-01-07T09:00:15.463Z",
          lastEdited: "2024-01-17T02:01:20.421Z",
          public: true,
        },
        {
          id: 8,
          author: "Wesley@gmail.com",
          authorId: 3,
          text: "Navigating the challenges of remote work by Wesley@gmail.com",
          created: "2024-01-27T11:06:06.533Z",
          lastEdited: "2024-01-27T11:06:06.533Z",
          public: true,
        },
        {
          id: 9,
          author: "Wesley@gmail.com",
          authorId: 3,
          text: "Why I Enjoy Hiking Wesley@gmail.com",
          created: "2024-01-08T03:03:11.147Z",
          lastEdited: "2024-01-23T05:27:57.752Z",
          public: true,
        },
        {
          id: 10,
          author: "Wesley@gmail.com",
          authorId: 3,
          text: "Keys to a successful marriage by Wesley@gmail.com",
          created: "2024-01-12T16:45:48.220Z",
          lastEdited: "2024-01-27T00:23:17.878Z",
          public: false,
        },
      ];
      localStorage.setItem("posts-data", JSON.stringify(postData)); // Store serialized data
      console.log("New Post data generated and saved");
    }

    return postData; // Return the userData
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null; // Return null or appropriate value on error
  }
};

export { generateUserData, fetchCurrentPage, searchForToken, generatePostData };
