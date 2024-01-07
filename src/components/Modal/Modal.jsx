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




