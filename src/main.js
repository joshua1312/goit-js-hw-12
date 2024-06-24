import { fetchImages } from './js/pixabay-api.js';
import {
    renderImages,
    show_Load_Ind,
    hide_Load_Ind,
    show_Err_Mess,
    show_Warn_Mess,
} from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const query = searchInput.value.trim();
    if (query === '') {
        hide_Load_Ind();
        show_Warn_Mess('Please enter a search query');
        return;
    }

    show_Load_Ind();

    fetchImages(query)
        .then(data => {
            hide_Load_Ind();
            if (data.hits.length === 0) {
                show_Err_Mess(
                    'Sorry, there are no images matching your search query. Please try again!'
                );
            } else {
                renderImages(data.hits);
            }
        })
        .catch(error => {
            hide_Load_Ind();
            show_Err_Mess('Failed to fetch images. Please try again later.');
        });
});