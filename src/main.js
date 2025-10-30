import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  clearGallery(); // 🔹 очищаємо галерею перед новим запитом
  showLoader();   // 🔹 показуємо loader

  getImagesByQuery(query)
    .then(data => {
      hideLoader(); // 🔹 ховаємо loader після відповіді

      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'Sorry',
          message: 'There are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits); // 🔹 додаємо всі зображення за одну операцію
    })
    .catch(() => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
    //   loader.classList.add("hidden");
      event.target.reset();
    });
}








// ****мій код***
// import axios from 'axios';
// // Описаний у документації
// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';
// // Описаний у документації
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const BASE_URL = "https://pixabay.com/api/";
// const API_KEY = '52923405-4f454c0beaa3d564f6127cb92';

// const form = document.querySelector(".form");
// const input = document.querySelector(".input");
// const button = document.querySelector(".button");
// const loader = document.querySelector(".loader");
// const gallery = document.querySelector(".gallery")

// form.addEventListener("submit", handlerSubmit);

// let lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });


// function handlerSubmit(event) {
//     event.preventDefault();
    
//      const form = event.currentTarget;
//   const query = form.elements["search-text"].value.trim();

//     getImagesByQuery(query)
//     .then(data => {
//         gallery.insertAdjacentHTML("beforeend", createMarkup(data.hits));
//     })

    
// }


// function getImagesByQuery(query) {
//     return axios(BASE_URL, {
//     params: {
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true
//     }
// })
//     .then(({ data }) => {
//     if (data.hits.length === 0) {
//     alert("Sorry, there are no images matching your search query. Please try again!");
// }
//      console.log(data);
//      return data;
//     })
//     .catch(error => {
//      console.error(error);
//      throw error;
//     })
// }


// function createMarkup(arr) {
//     return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
//     <li>
//     <img src="${webformatURL}" alt="${tags}" />

//     <div class ="stats">

//     <div class ="stats-params">
//     <span class="stats-item">Likes</span>
//     <span class="stats-number">${likes}</span>
//     </div>

//     <div class ="stats-params">
//     <span class="stats-item">Views</span>
//     <span class="stats-number">${views}</span>
//     </div>

//     <div class ="stats-params">
//     <span class="stats-item">Comments</span>
//     <span class="stats-number">${comments}</span>
//     </div>

//     <div class ="stats-params">
//     <span class="stats-item">Downloads</span>
//     <span class="stats-number">${downloads}</span>
//     </div>

//     </div>
//     </li>
//     `).join("");
// }

