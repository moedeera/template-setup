const fetchPublicPosts = () => {
  // Fetch the stringified post data from localStorage
  const postsDataString = localStorage.getItem("posts-data");
  if (!postsDataString) {
    console.error("No posts data found in localStorage");
    return [];
  }

  // Parse the stringified post data back into an array
  const postsData = JSON.parse(postsDataString);

  // Filter the posts to return only those marked as public
  const publicPosts = postsData.filter((post) => post.public === true);

  return publicPosts;
};

export { fetchPublicPosts };
