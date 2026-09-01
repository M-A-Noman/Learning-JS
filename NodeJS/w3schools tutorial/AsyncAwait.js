function getUserPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe" });
    }, 1000);
  });
}

function getUserPostsPromise(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
  });
}

getUserPromise(123)
  .then((user) => {
    console.log("User:", user);
    return getUserPostsPromise(user);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

  const getUserAndPosts=async(userId)=>{
    try{
        const user=await getUserPromise(userId);
        console.log('user:',user);
        const posts=await getUserPostsPromise(user);
        console.log('Posts:',posts);
    }catch(error){
        console.log('error',error)
    }
  }

  await getUserAndPosts(124)
