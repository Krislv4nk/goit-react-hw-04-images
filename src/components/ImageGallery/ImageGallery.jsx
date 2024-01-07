import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";


export const ImageGallery = ({ images, onImageClick }) => {
 const  handleOpen = (largeImageURL) => {
    onImageClick(largeImageURL);
  }
  

    return (
      <ul className={css.gallery}>
        {images.map((image) => (
          <ImageGalleryItem 
  key={image.id} 
  webformatURL={image.webformatURL} 
  tags={image.tags}
  largeImageURL={image.largeImageURL}
  onImageClick={handleOpen}
/>

        ))}
      </ul>
    );
  }


