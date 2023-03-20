const fetchPosts = () => { // Get list of items
  return fetch('https://vivian2.free.beeceptor.com/posts', { method: 'GET', })
    .then((response) => {
      return response.json();
    })
    .catch(error => {
      console.log(error.toString());
    });
}

const fetchPost = (postId) => {  // Get single Item
  return fetch(`https://vivian2.free.beeceptor.com/posts?postId=${postId}`)
    .then((response) => {
      return response.json();
    })
    .catch(error => {
      console.log(error.toString());
    });
}

const createPost = (postData) => {
  return fetch('https://vivian2.free.beeceptor.com/posts',
    {
      method: 'POST',
      body: JSON.stringify(postData)
    }
  ).then((response) => {
    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  }).catch(error => {
    console.log(error.toString());
    return false;
  });
}

const updatePost = (postData) => {
  return fetch(`https://vivian2.free.beeceptor.com/posts?postId=${postData.postId}`,
    {
      method: 'PUT',
      body: JSON.stringify(postData)
    }
  ).then((response) => {
    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  }).catch(error => {
    console.log(error.toString());
    return false;
  });
}

const deletePost = (postId) => {
  return fetch(`https://vivian2.free.beeceptor.com/posts?postId=${postId}`,
    { method: 'DELETE' }
  ).then((response) => {
    return response.json();
  }).catch(error => {
    console.log(error.toString());
  });
}

export {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost
}