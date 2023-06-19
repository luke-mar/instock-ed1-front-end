import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import Modal from "../Modal/Modal";
import "./InventoryList.scss";
import DeleteInventories from "../DeleteInventories/DeleteInventories";

function InventoryList({ setInventoryToEdit, setEditCount, editCount }) {
    const [inventories, setInventories] = useState([]);
    const [searchInventoryItem, setSearchInventoryItem] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [inventoriesToDelete, setInventoriesToDelete] = useState([]);
    const [deleteCount, setDeleteCount] = useState(0);
    const headers = [
        "INVENTORY ITEM",
        "CATEGORY",
        "STATUS",
        "QTY",
        "WAREHOUSE",
    ];

    function refreshFunction() {
        setDeleteCount(deleteCount + 1);
    }

    function handleLinkClick(event) {
        const inventoryId = event.target.id;
    }

    function handleClick(click) {
        setIsOpen(true);
        setInventoriesToDelete([click]);
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/inventories")
            .then((response) => {
                if (response.data) {
                    setInventories(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [deleteCount, editCount]);

    const filteredInventories = inventories.filter((inventory) => {
        return inventory.item_name
            .toLowerCase()
            .includes(searchInventoryItem.toLowerCase());
    });

    const handleChange = (e) => {
        setSearchInventoryItem(e.target.value);
    };

    return (
        <>
            <div className="">
                <Modal open={isOpen}>
                    <DeleteInventories
                        inventoriesToDelete={inventoriesToDelete}
                        onclose={() => setIsOpen(false)}
                        refreshFunction={refreshFunction}
                    ></DeleteInventories>
                </Modal>
            </div>

            <section className="inventories">
                <section className="inventories__header">
                    <h1 className="inventories__header-title">Inventories</h1>
                    <div className="inventories__header-search-container">
                        <div className="inventories__header-search">
                            <img
                                className="inventories__header-image"
                                src={SearchIcon}
                                alt="search icon"
                            />
                            <input
                                type="text"
                                className="inventories__header-input"
                                placeholder="Search ..."
                                onChange={handleChange}
                            />
                        </div>
                        <Link to={"/addinventory"}>
                            <button className="inventories__header-button">
                                + Add New inventory
                            </button>
                        </Link>
                    </div>
                </section>

                <section>
                    <table className="inventories__lists">
                        <thead className="inventories__lists-headers">
                            <tr className="inventories__lists-row">
                                {headers.map((header) => (
                                    <th className="inventories__lists-cell">
                                        {header}
                                        <img
                                            className="inventories__lists-icon"
                                            src={sortIcon}
                                            alt="sort icon"
                                        />
                                    </th>
                                ))}
                                <th className="inventories__lists-cell inventories__lists-actions">
                                    ACTIONS
                                </th>
                            </tr>
                        </thead>

                        <tbody className="inventories__lists-body">
                            {filteredInventories.map((inventory) => (
                                <tr className="inventories__lists-row">
                                    <td className="inventories__lists-cell inventories__lists--text-underline">
                                        <h4 className="inventories__lists-title">
                                            INVENTORY ITEM
                                        </h4>
                                        <Link
                                            className="link"
                                            to={`/inventories/${inventory.id}`}
                                            onClick={handleLinkClick}>
                                            <p>{inventory.item_name}</p>
                                            <img
                                                className="inventories__lists-name-color"
                                                src={chevronIcon}
                                                alt="chevron icon"
                                            />
                                        </Link>
                                    </td>
                                    <td className="inventories__lists-cell">
                                        <h4 className="inventories__lists-title">
                                            CATEGORY
                                        </h4>
                                        <br />
                                        <p>{inventory.category}</p>
                                    </td>
                                    <td className="inventories__lists-cell">
                                        <h4 className="inventories__lists-title">
                                            STATUS
                                        </h4>
                                        <br />
                                        <p
                                            id={`${
                                                inventory.quantity > 0
                                                    ? "instock"
                                                    : "outofstock"
                                            }`}
                                        >
                                            {inventory.status}
                                        </p>
                                    </td>
                                    <td className="inventories__lists-cell">
                                        <h4 className="inventories__lists-title">
                                            QTY
                                        </h4>
                                        <br />
                                        <p>{inventory.quantity}</p>
                                    </td>
                                    <td className="inventories__lists-cell">
                                        <h4 className="inventories__lists-title">
                                            WAREHOUSE
                                        </h4>
                                        <br />
                                        <p>{inventory.warehouse_name}</p>
                                    </td>
                                    <td className="inventories__lists-cell warehouse__lists-actions">
                                        <img
                                            className="inventories__lists-actions-icons"
                                            src={deleteIcon}
                                            alt="delete icon"
                                            onClick={() =>
                                                handleClick(inventory)
                                            }
                                        />
                                        <Link
                                            to={`/inventories/${inventory.id}/editinventory`}
                                            className="edit-inventory-link"
                                        >
                                            <img
                                                className="inventories__lists-actions-icons"
                                                src={editIcon}
                                                alt="edit icon"
                                            />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </section>
        </>
    );
}

export default InventoryList;
