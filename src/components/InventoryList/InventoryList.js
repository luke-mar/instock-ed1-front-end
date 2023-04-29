import {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import DeleteInventory from "../DeleteInventory/DeleteInventory";
import Modal from "../Modal/Modal";
import "./InventoryList.scss";

function inventoryList() {
    const [inventories, setInventories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [inventoryToDelete, setInventoryToDelete] = useState(null);
    const [deleteCount, setDeleteCount] = useState(0);


    function refreshFunction() {
        setDeleteCount(deleteCount + 1);
        console.log("updated deleteCount to", deleteCount);
    }

    function handleLinkClick(event) {
        const inventoryId = event.target.id;
        console.log(inventoryId);
    }

    function handleClick(click) {
        console.log(click);
        setIsOpen(true);
        setInventoryToDelete(click);
    }

    useEffect(() => {
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
                        onClose={() => setIsOpen(false)}
                        refreshFunction={refreshFunction}
                    ></DeleteInventory>
                </Modal>
            </div>

            <section className="inventories">
                <section className="inventories__header">
                    <h1 className="inventories__header-title">inventories</h1>
                    <div className="inventories__header-search-container">
                        <div className="inventories__header-search">
                            <img
                                className="inventories__header-image"
                                src="../assets/Icons/search-24px.svg"
                                alt="search icon"
                            />
                            <input
                                type="text"
                                className="inventories__header-input"
                                placeholder="Search ..."
                            />
                        </div>
                        <button className="inventories__header-button">
                            + Add New inventory
                        </button>
                    </div>
                </section>

                <section className="inventories__lists">
                    <div className="inventories__lists-header">
                        <div className="inventories__lists-header-column-title">
                            <h4>INVENTORY ITEM</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                        <div className="inventories__lists-header-column-title">
                            <h4>ADDRESS</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                        <div className="inventories__lists-header-column-title">
                            <h4>CONTACT NAME</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                        <div className="inventories__lists-header-column-title">
                            <h4>CONTACT INFORMATION</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                        <div className="inventories__lists-header-column-title">
                            <h4>ACTION</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                    </div>

                    <div className="inventories__list-content-rows">
                        {inventories.map((inventoryData) => (
                            <div
                                key={inventoryData.id}
                                className="inventories__list-content-row"
                            >
                                <div className="inventories__list-content-row-container">
                                    <Link
                                        key={inventoryData.id}
                                        className="inventories__name"
                                        to={`/inventories/${inventoryData.id}`}
                                        inventory={inventoryData}
                                        onClick={handleLinkClick}
                                    >
                                        <h3>{inventoryData.item_name}</h3>
                                        <img
                                            className="image"
                                            src={chevronIcon}
                                            alt="chevron icon"
                                        />
                                    </Link>
                                </div>
                                <div className="inventories__list-content-row-container">
                                    <p>{inventoryData.description}</p>
                                </div>
                                <div className="inventories__list-content-row-container">
                                    <p>{inventoryData.category}</p>
                                </div>
                                <div className="inventories__list-content-row-container phone-email">
                                    <p>{inventoryData.status}</p>
                                    <p>{inventoryData.quantity}</p>
                                </div>
                                <div className="inventories__list-content-row-container">
                                    <img
                                        className="image_action"
                                        src={deleteIcon}
                                        alt="delete icon"
                                        onClick={() => handleClick(inventoryData)}
                                    />
                                    <img
                                        className="image_action"
                                        src={editIcon}
                                        alt="edit icon"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
}

export default inventoryList;
