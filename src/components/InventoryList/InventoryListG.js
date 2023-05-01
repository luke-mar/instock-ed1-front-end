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

function InventoryList() {
    const [inventories, setInventories] = useState([]);
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
        console.log("updated deleteCount to", deleteCount);
    }

    function handleLinkClick(event) {
        const inventoryId = event.target.id;
        // does this need a prevent default?
    }

    function handleClick(click) {
        // console.log(click);
        setIsOpen(true);
        setInventoriesToDelete([click]);
    }

    useEffect(() => {
        console.log("calling axios");
        axios
            .get("http://localhost:8080/inventories")
            .then((response) => {
                // console.log("got a response from axios", response)
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
                            {inventories.map((inventory) => (
                                <tr className="inventories__lists-row">
                                    <td className="inventories__lists-cell inventories__lists--text-underline">
                                        <h4 className="inventories__lists-title">
                                            INVENTORY ITEM
                                        </h4>
                                        {/* <br /> */}
                                        <Link
                                            // key={inventory.id}
                                            className="link"
                                            to={`/inventories/${inventory.id}`}
                                            // inventory={inventory}
                                            onClick={handleLinkClick}
                                        >
                                            <p>{inventory.item_name}</p>
                                            {/* <Link className='inventories__lists--text-underline'>
                                            {inventory.item_name}
                                        </Link> */}
                                            <img
                                                className="inventories__lists-icon-chevron"
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
                                        <p>{inventory.status}</p>
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
                                            to={"/editinventory"}
                                            className="edit-inventory-link"
                                        >
                                            <img
                                                className="inventories__lists-actions-icons"
                                                src={editIcon}
                                                alt="edit icon"
                                                // onClick={() =>
                                                //     handleClick(inventories)
                                                // }
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
