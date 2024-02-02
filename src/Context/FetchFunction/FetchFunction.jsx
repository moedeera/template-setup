function sometimesReturnValue(value) {
  return new Promise((resolve, reject) => {
    // Decide to delay response by 1 second 50% of the time
    if (Math.random() < 0.5) {
      setTimeout(() => {
        // After delay, decide to return value or error
        if (Math.random() < 0.5) {
          resolve(value);
        } else {
          reject(new Error("Function did not return a value."));
        }
      }, 1000); // Delay by 1 second
    } else {
      // Without delay, decide to return value or error
      if (Math.random() < 0.5) {
        resolve(value);
      } else {
        reject(new Error("Function did not return a value."));
      }
    }
  });
}

// Example usage
// sometimesReturnValue("Hello, world!")
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error.message));

export { sometimesReturnValue };
