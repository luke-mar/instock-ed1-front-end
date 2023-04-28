import "../TesteDelete/TestDelete.scss"
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";
import Modal from "../Modal/Modal";
import React, { useState } from "react";
import DeleteInventory from "../DeleteInventory/DeleteInventory";

function TestDelete() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="teste">
            <button onClick={() => setIsOpen(true)} >
                Open Modal
            </button>
            <Modal open = {isOpen}>
                <DeleteWarehouse onclose={()=>setIsOpen(false)}>
                </DeleteWarehouse>
                {/* <DeleteInventory onclose={()=>setIsOpen(false)}>  
                </DeleteInventory> */}
            </Modal>
            <div className="teste2"onClick={() => setIsOpen(true)} >It will change</div>
        </div>

    );
}

export default TestDelete;