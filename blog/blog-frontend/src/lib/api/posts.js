import client from './client';

//Create a new post
export const writePost = ({ title, body, tags }) => {
  return client.post('/api/posts', { title, body, tags });
};

//Fetch a single post by ID
export const readPost = (id) => client.get(`/api/posts/${id}`);

// Fetch post list API
export const listPosts = ({ page, username, tag }) => {
  return client.get('/api/posts', {
    params: { page, username, tag },
  });
};

// update post  API
export const updatePost = ({ id, title, body, tags }) => {
  return client.get(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });
};

// delete post API
export const removePost = id => client.delete(`/api/posts/${id}`) ;
