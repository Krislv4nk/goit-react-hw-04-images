import React, { useState, useEffect } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import {LoadMoreButton} from '../Button/Button';
import { fetchGalleryItems } from 'Services/API';
import{Modal} from '../Modal/Modal';
import css from './App.module.css';



export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [totalHits, setTotalHits] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const per_page = 12;
  

 const  handleSearchSubmit = (value) => {
    if (value.trim() !== '') {
       setSearchValue(value);
      setImages([]);
      setPage(1);
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1 );
  };



  useEffect(() => {
    if (searchValue.trim() === '') {
      return ;
    }
    setIsLoading(true);
    fetchGalleryItems(searchValue, page, per_page)
      .then(({ totalHits, hits }) => {
        setImages(prevImages => page === 1 ?
          hits : [...prevImages, ...hits]);
        setTotalHits(totalHits);
      })
      .catch(error =>
        console.log('Error', error))
       
  .finally(() => setIsLoading(false));
}, [searchValue, page, per_page]);
 const handleImageClick = (largeImageURL) => {
    setShowModal(true);
    setSelectedImage(largeImageURL);
  };

 const handleModalClose = () => {
   setShowModal(false);
   setSelectedImage(null);
  };

 
    const imagesArray = Array.isArray(images) ? images : [];
    const isButtonVisible = imagesArray.length > 0 && totalHits > imagesArray.length;

    return (
      <div className={css.container}>
    <SearchBar onSubmit={handleSearchSubmit} />
    {isLoading ? <Loader /> : null}
    {imagesArray.length > 0 && <ImageGallery images={imagesArray} onImageClick={handleImageClick} />}
    {!isLoading && <LoadMoreButton onClick={handleLoadMore} isVisible={isButtonVisible} />}
    {showModal && <Modal selectedImage={selectedImage} onClose={handleModalClose} />}
  </div>
    );
  }

