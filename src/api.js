const baseUrl = 'http://192.249.18.90';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export const fetchUser = async (userId) => {
  try {
      let response = await fetch(`${baseUrl}/user/${userId}`, {
      method: 'GET',
      headers: {
        ...headers,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPost = async (postId) => {
    try {
        let response = await fetch(`${baseUrl}/post/${postId}`, {
        method: 'GET',
        headers: {
          ...headers,
        },
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  export const fetchPostList = async () => {
    try {
        let response = await fetch(`${baseUrl}/post/`, {
        method: 'GET',
        headers: {
          ...headers,
        },
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  export const addPost = async (user_id, title, content, category) => {
    try {
      let response = await fetch(`${baseUrl}/post`, {
        method: 'POST',
        headers: {
          ...headers,
        },
        body: JSON.stringify({
          "user_id": user_id,
          "title": title,
          "content": content,
          "category": category,
        }),
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const editPost = async (post_id, content) => {
    try {
      let response = await fetch(`${baseUrl}/post/${post_id}`, {
        method: 'PUT',
        headers: {
          ...headers,
        },
        body: JSON.stringify({
          "content": content,
        }),
      });
      let json = await response.json();
      return json;
      
    } catch (error) {
      console.error(error);
    }
  };
  export const deletePost = async (post_id) => {
    try {
      let response = await fetch(`${baseUrl}/post/${post_id}`, {
        method: 'DELETE',
        headers: {
          ...headers,
        },
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const addComment = async (user_id, post_id, content) => {
    try {
      let response = await fetch(`${baseUrl}/post`, {
        method: 'POST',
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          "user_id": user_id,
          "content": content,
          "post_id": post_id,
        }),
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const fetchCommentListFromPost = async (post_id) => {
    try {
        let response = await fetch(`${baseUrl}/comment/post/${post_id}`, {
        method: 'GET',
        headers: {
          ...headers,
        },
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const editComment = async (comment_id, content) => {
    try {
      let response = await fetch(`${baseUrl}/comment/${comment_id}`, {
        method: 'PUT',
        headers: {
          ...headers,
        },
        body: JSON.stringify({
          "content": content,
        }),
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const deleteComment = async (comment_id) => {
    try {
      let response = await fetch(`${baseUrl}/comment/${comment_id}`, {
        method: 'DELETE',
        headers: {
          ...headers,
        },
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };