import axios from 'axios';

export async function fetchImages(query, page) {
    const searchParams = new URLSearchParams({
        key: '44481780-b4b938698ada11f180983274a',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    try {
        const response = await axios(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch images');
    }
}