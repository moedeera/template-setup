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

export { sometimesReturnValue };
