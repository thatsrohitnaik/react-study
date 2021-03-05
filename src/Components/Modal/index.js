import React from "react";
import "./style.css";

const Modal = (props) => {
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={props.toggleDialog}>&times;</span>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Modal;