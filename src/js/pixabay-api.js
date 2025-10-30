import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52923405-4f454c0beaa3d564f6127cb92';

export function getImagesByQuery(query) {
  return axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 21,
    },
  })
    .then(({ data }) => data)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
