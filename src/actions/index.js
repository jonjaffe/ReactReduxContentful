import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_ASSET = 'FETCH_ASSET';
const API_BASE_URL = 'https://cdn.contentful.com';
export const API_SPACE_ID = 'qd9j4ldrs8tz';
export const API_TOKEN = '908a53956b02fcc278b08e67ce3c0dbe0403307a8cd5273a4020994c360012d3';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}
