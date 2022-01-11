import { defineAnimation } from "react-native-reanimated";

const baseUrl = 'http://192.249.18.90';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
export const login = async() => {
    try {
        let response = await fetch(`${baseUrl}/auth/kakao`, {
        method: 'GET',
        headers: {
          ...headers,
        },
      });
      let json = response;
      return json;
    } catch (error) {
      console.error(error);
    }
  }
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
  export const editPost = async (post_id, title, content) => {
    try {
      let response = await fetch(`${baseUrl}/post/${post_id}`, {
        method: 'PUT',
        headers: {
          ...headers,
        },
        body: JSON.stringify({
          "title": title,
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
      let response = await fetch(`${baseUrl}/comment`, {
        method: 'POST',
        headers: {
          ...headers,
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

  
  export const fetchMenuItem = async (menuItemId) => {
    try {
        let response = await fetch(`${baseUrl}/menu_item/${menuItemId}`, {
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
  export const fetchMenuItems = async (userId) => {
    try {
        let response = await fetch(`${baseUrl}/menu_item/user/${userId}`, {
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
  export const addMenuItem = async (cost, name, price, userId) => {
    try {
      let response = await fetch(`${baseUrl}/menu_item`, {
        method: 'POST',
        headers: {
          ...headers,
        },
        body: JSON.stringify({
          "cost": cost,
          "name": name,
          "price": price,
          "user_id": userId,
        }),
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const editMenuItem = async (menuItemId, cost, name, count, price) => {
    try {
      let response = await fetch(`${baseUrl}/menu_item/${menuItemId}/`, {
        method: 'PUT',
        headers: {
          ...headers,
        },
        body: JSON.stringify({
          "cost": cost,
          "name": name,
          "count": count,
          "price": price
        }),
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  export const deleteMenuItem = async (menuItemId) => {
    try {
      let response = await fetch(`${baseUrl}/menu_item/${menuItemId}`, {
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

  export const fetchExpense = async (menuItemId) => {
    try {
        let response = await fetch(`${baseUrl}/expense/${menuItemId}`, {
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
  export const fetchExpenses = async (userId) => {
    try {
        let response = await fetch(`${baseUrl}/expense/user/${userId}`, {
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
  export const addExpense = async (cost, name, userId) => {
    try {
      let response = await fetch(`${baseUrl}/expense`, {
        method: 'POST',
        headers: {
          ...headers,
        },
        body: JSON.stringify({
          "cost": cost,
          "name": name,
          "user_id": userId,
        }),
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  export const editExpense = async (expenseId, cost, name) => {
    try {
      let response = await fetch(`${baseUrl}/expense/${expenseId}/`, {
        method: 'PUT',
        headers: {
          ...headers,
        },
        body: JSON.stringify({
          "cost": cost,
          "name": name,
        }),
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  export const deleteExpense = async (expenseId) => {
    try {
      let response = await fetch(`${baseUrl}/expense/${expenseId}`, {
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