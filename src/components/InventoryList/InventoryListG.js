import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import DeleteInventory from "../DeleteInventory/DeleteInventory";
import Modal from "../Modal/Modal";
import AddInventory from "../AddInventory/AddInventory";
import "./InventoryList.scss";

function InventoryList() {
    const [inventories, setInventories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [inventoryToDelete, setInventoryToDelete] = useState(null);
    const [deleteCount, setDeleteCount] = useState(0);
    const headers = ["INVENTORY ITEM", "CATEGORY", "STATUS", "QTY", "WAREHOUSE"]
  


    function refreshFunction() {
        setDeleteCount(deleteCount + 1);
        console.log("updated deleteCount to", deleteCount);

    }


    function handleLinkClick(event) {
        const inventoryId = event.target.id;
        console.log(inventoryId);
    }

    function handleClick(click) {
        // console.log(click);
        setIsOpen(true);
        setInventoryToDelete(click);
    }

    useEffect(() => {
        console.log("calling axios")
        axios
            .get("http://localhost:8080/inventories")
            .then((response) => {
                console.log("got a response from axios", response)
                if (response.data) {
                    setInventories(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [deleteCount]);


    return (
        <>
            <div className="">
                <Modal open={isOpen}>
                    <DeleteInventory
                        inventoryToDelete={inventoryToDelete}
                        onclose={() => setIsOpen(false)}
                        refreshFunction={refreshFunction}
                    ></DeleteInventory>
                </Modal>
            </div>


            <section className='inventories'>
                <section className='inventories__header'>
                    <h1 className='inventories__header-title'>Inventories</h1>
                    <div className='inventories__header-search-container'>
                        <div className='inventories__header-search'>
                            <img className='inventories__header-image' src='../assets/Icons/search-24px.svg' alt="search icon" />
                            <input type='text' className='inventories__header-input' placeholder='Search ...' />
                        </div>
                        <Link to={"/inventories"}>
                            <button className="inventories__header-button">
                                + Add New inventory
                            </button>
                        </Link>
                    </div>
                </section>


                <section className=''>
                    <table className=''>
                        <thead className=''>
                            <tr className=''>{headers.map((header) =>
                                <th className=''>
                                    {header}
                                    <img className='' src={sortIcon} alt="sort icon" />
                                </th>)
                            }
                                <th className=''>ACTIONS</th>
                            </tr>
                        </thead>


                        <tbody className=''>
                            {inventories.map((inventory) =>
                                <tr className=''>
                                    <td className=''>
                                        <div className=''>INVENTORY ITEM</div>
                                        <br />
                                        <a>{inventory.item_name}</a>
                                        <img className='' src={chevronIcon} alt="chevron icon" />
                                    </td>
                                    <td className=''>
                                        <div>CATEGORY</div>
                                        <br />
                                        {inventory.category}
                                    </td>
                                    <td className=''>
                                        <div>STATUS</div>
                                        <br />
                                        {inventory.status}
                                    </td>
                                    <td className=''>
                                        <div>QTY</div>
                                        <br />{inventory.quantity}
                                    </td>
                                    <td className=''>
                                        <div>WAREHOUSE</div>
                                        <br />{inventory.warehouse_id}
                                    </td>
                                    <td className=''>
                                        <img
                                            className=''
                                            src={deleteIcon}
                                            alt='delete icon'
                                            onClick={() => handleClick(inventories)}
                                        />
                                        <img 
                                        className='' 
                                        src={editIcon} 
                                        alt='edit icon' 
                                        onClick={() => handleClick(inventories)}
                                        />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </section>
        </>
    )
}

export default InventoryList
