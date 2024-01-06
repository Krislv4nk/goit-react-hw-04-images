import React, { Component } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import {LoadMoreButton} from '../Button/Button';
import { fetchGalleryItems } from 'Services/API';
import{Modal} from '../Modal/Modal';
import css from './App.module.css'
export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    searchValue: '',
    totalHits: 0,
    error: null,
    per_page: 12,
    showModal: false,
    selectedImage: null,
  };

  handleSearchSubmit = (searchValue) => {
    if (searchValue.trim() !== '') {
      this.setState({ searchValue, images: [], page: 1 });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, page, per_page } = this.state;
    if (prevState.page !== this.state.page || prevState.searchValue !== this.state.searchValue) {
      this.setState({ isLoading: true });
      fetchGalleryItems(searchValue, page, per_page)
        .then(({ totalHits, hits }) =>
          this.setState(prevState => ({
            images: page === 1 ? hits : [...prevState.images, ...hits],
            totalHits,
          }))
        )
        .finally(() => this.setState({ isLoading: false }))
        .catch(error => {
          console.log('Error', error);
        });
    }
  }
  handleImageClick = (largeImageURL) => {
    this.setState({ showModal: true, selectedImage: largeImageURL });
  };

  handleModalClose = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, isLoading, totalHits,  } = this.state;
    const imagesArray = Array.isArray(images) ? images : [];
    const isButtonVisible = imagesArray.length > 0 && totalHits > imagesArray.length;

    return (
      <div className={css.container}>
    <SearchBar onSubmit={this.handleSearchSubmit} />
    {isLoading ? <Loader /> : null}
    {imagesArray.length > 0 && <ImageGallery images={imagesArray} onImageClick={this.handleImageClick} />}
    {!isLoading && <LoadMoreButton onClick={this.handleLoadMore} isVisible={isButtonVisible} />}
    {this.state.showModal && <Modal selectedImage={this.state.selectedImage} onClose={this.handleModalClose} />}
  </div>
    );
  }
}