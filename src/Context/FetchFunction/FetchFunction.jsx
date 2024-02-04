function sometimesReturnValue(value) {
  return new Promise((resolve, reject) => {
    // Decide to delay response by 1 second 50% of the time
    if (Math.random() < 0.5) {
      setTimeout(() => {
        // After delay, decide to return value or error
        if (Math.random() < 0.75) {
          resolve(value);
        } else {
          reject(new Error("Error in Database. Please try again later."));
        }
      }, 1000); // Delay by 1 second
    } else {
      // Without delay, decide to return value or error
      if (Math.random() < 0.75) {
        resolve(value);
      } else {
        reject(new Error("Error in Database. Please try again later"));
      }
    }
  });
}

// Example usage
// sometimesReturnValue("Hello, world!")
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error.message));
const userDt = [
  { id: 0, email: "Tim@gmail.com", password: "123Admin", token: 110033 },
  { id: 1, email: "John@gmail.com", password: "123john", token: 112233 },
  { id: 2, email: "Kevin@gmail.com", password: "123kevin", token: 223344 },
  { id: 3, email: "Wesley@gmail.com", password: "123wesley", token: 445566 },
];

const randomTimestamp = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
  return new Date(
    start.getTime() + Math.random() * (now.getTime() - start.getTime())
  );
};

const postTexts = [
  "Exploring the world of JavaScript",
  "Why I love coding",
  "The future of web development",
  "My journey with React",
  "Understanding Async/Await",
  "The beauty of functional programming",
  "Typescript vs. JavaScript",
  "What I've learned from GPT",
  "Navigating the challenges of remote work",
  "The importance of open source",
];

const generatePostsForUsers = (users) => {
  const posts = [];
  let postId = 1;

  users.forEach((user) => {
    const numPosts = user.id === 0 ? 1 : 3; // First user gets 1 post, others get 3
    for (let i = 0; i < numPosts; i++) {
      const created = randomTimestamp();
      const lastEdited = randomTimestamp();
      const textIndex = Math.floor(Math.random() * postTexts.length);
      posts.push({
        id: postId++,
        author: user.email,
        authorId: user.id,
        text: `${postTexts[textIndex]} by ${user.email}`,
        created: created,
        lastEdited: lastEdited > created ? lastEdited : created,
      });
    }
  });

  return posts;
};

export { sometimesReturnValue };
