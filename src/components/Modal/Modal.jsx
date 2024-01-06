import React, { useEffect} from "react";
import css from './Modal.module.css';


export const Modal = ({ selectedImage, onClose }) => {
 useEffect(() => {
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    }
    window.addEventListener('keydown', handleKeyDown);
     return () => {
         window.removeEventListener('keydown', handleKeyDown);
     };
 }, [onClose])

const handleOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
           onClose();
        }
    };

    return (
        <div className={css.overlay} onClick={handleOverlayClick}>
            <div className={css.modal}>
                <img className={css.modalImage} src={selectedImage} alt="" />
            </div>
        </div>
    );
}





// export class Modal extends Component {
//     componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown);
//     }

//     handleKeyDown = (e) => {
//         if (e.code === 'Escape') {
//             this.props.onClose();
//         }
//     };

//     handleOverlayClick = (e) => {
//         if (e.currentTarget === e.target) {
//             this.props.onClose();
//         }
//     };

//     render() {
//         const { selectedImage } = this.props;
//         return (
//             <div className={css.overlay} onClick={this.handleOverlayClick}>
//                 <div className={css.modal}>
//                     <img className={css.modalImage} src={selectedImage} alt="" />
//                 </div>
//             </div>
//         );
//     }
// }
