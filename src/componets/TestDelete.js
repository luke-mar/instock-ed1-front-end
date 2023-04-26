import "../../src/componets/TesteDelete.scss"
import DeleteWarehouses from "./DeleteWarehouses";
import Modal from "./Modal";
import React, { useState } from "react";

function TesteDelete() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="teste">
            <button onClick={() => setIsOpen(true)} >
                Open Modal
            </button>
            <Modal open = {isOpen}>
                <DeleteWarehouses onclose={()=>setIsOpen(false)}>
                </DeleteWarehouses>
            </Modal>
            <div className="teste2">It will change</div>
        </div>

    );
}

export default TesteDelete;