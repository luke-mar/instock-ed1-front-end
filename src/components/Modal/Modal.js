import React from "react";
import './Modal.scss';
import ReactDom from "react-dom";

function Modal({ open, children }) {
    if (!open) return null
    return ReactDom.createPortal(
        <div className="modal-overlay">
            <div className="modal-overlay__container">
                {children}
            </div>
        </div>,
    document.getElementById('portal')
    );
}

export default Modal;