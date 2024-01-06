import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  handleClick = () => {
  this.props.onImageClick(this.props.largeImageURL);
};

  render() {
    const { id, webformatURL, tags } = this.props;

    return (
      <li className={css.ImageGalleryItem} onClick={this.handleClick} >
        <img
          className={css.imageItem}
          src={webformatURL}
          alt={tags}
          id={id}
        />
      </li>
    );
  }
}