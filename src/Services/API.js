import axios from 'axios';

 const apiKey = '40664862-84b34fcb53558e764c2f17e18';
const url = 'https://pixabay.com/api/';





export const fetchGalleryItems = async (searchQuery, page = 1, per_page = 12) => {
    try {
  const { data } = await axios.get(
    `${url}?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${per_page}`
  );
        return data;
        } catch (error) {
    console.error('Error during fetch:', error);
  }
};

