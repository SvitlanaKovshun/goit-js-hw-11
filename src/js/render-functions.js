import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// створюємо екземпляр SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// створення розмітки для галереї
export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="stats">
          <div class="stats-params">
            <span class="stats-item">Likes</span>
            <span class="stats-number">${likes}</span>
          </div>
          <div class="stats-params">
            <span class="stats-item">Views</span>
            <span class="stats-number">${views}</span>
          </div>
          <div class="stats-params">
            <span class="stats-item">Comments</span>
            <span class="stats-number">${comments}</span>
          </div>
          <div class="stats-params">
            <span class="stats-item">Downloads</span>
            <span class="stats-number">${downloads}</span>
          </div>
        </div>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh(); // 🔹 обов’язково оновлюємо після вставки
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
