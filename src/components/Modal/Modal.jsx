import React, { Component } from "react";
import css from './Modal.module.css';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        const { selectedImage } = this.props;
        return (
            <div className={css.overlay} onClick={this.handleOverlayClick}>
                <div className={css.modal}>
                    <img className={css.modalImage} src={selectedImage} alt="" />
                </div>
            </div>
        );
    }
}   



