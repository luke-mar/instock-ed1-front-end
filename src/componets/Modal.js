import React from "react";
import './Modal.scss';
import ReactDom from "react-dom";

function Modal({ open, children }) {
    if (!open) return null
    return ReactDom.createPortal(
        <div className="overlay">
            <div className="model-class">
                {children}
            </div>
        </div>,
    document.getElementById('portal')
    );
}

export default Modal;