import React from 'react';
import css from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ id, webformatURL, tags, onImageClick }) => {
  const handleClick = () => {
    onImageClick(webformatURL);
};

    return (
      <li className={css.ImageGalleryItem} onClick={handleClick} >
        <img
          className={css.imageItem}
          src={webformatURL}
          alt={tags}
          id={id}
        />
      </li>
    );
}

// export class ImageGalleryItem extends Component {
//   handleClick = () => {
//   this.props.onImageClick(this.props.largeImageURL);
// };

//   render() {
//     const { id, webformatURL, tags } = this.props;

//     return (
//       <li className={css.ImageGalleryItem} onClick={this.handleClick} >
//         <img
//           className={css.imageItem}
//           src={webformatURL}
//           alt={tags}
//           id={id}
//         />
//       </li>
//     );
//   }
// }