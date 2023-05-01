import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";
import Modal from "../Modal/Modal";
import "./WarehouseList.scss";

function WarehouseList() {
    const [warehouses, setWarehouses] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [warehouseToDelete, setWarehouseToDelete] = useState(null);
    const [deleteCount, setDeleteCount] = useState(0);
    const headers = [
        "WAREHOUSE",
        "ADDRESS",
        "CONTACT NAME",
        "CONTACT INFORMATION",
    ];

    function refreshFunction() {
        setDeleteCount(deleteCount + 1);
        // console.log("updated deleteCount to", deleteCount);
        // delete console.logs before submitting
    }

    function handleLinkClick(event) {
        const warehouseId = event.target.id;
        // console.log(warehouseId);
    }

    function handleClick(click) {
        // console.log(click);
        setIsOpen(true);
        setWarehouseToDelete(click);
    }

    useEffect(() => {
        // console.log("calling axios");
        axios
            .get("http://localhost:8080/warehouses")
            .then((response) => {
                // console.log("got a response from axios", response);
                if (response.data) {
                    setWarehouses(response.data);
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
                    <DeleteWarehouse
                        warehouseToDelete={warehouseToDelete}
                        onclose={() => setIsOpen(false)}
                        refreshFunction={refreshFunction}
                    ></DeleteWarehouse>
                </Modal>
            </div>

            <section className="warehouses">
                <section className="warehouses__header">
                    <h1 className="">Warehouses</h1>
                    <div className="warehouses__header-search-container">
                        <div className="warehouses__header-search">
                            <img
                                className="warehouses__header-image"
                                src={SearchIcon}
                                alt="search icon"
                            />
                            <input
                                type="text"
                                className="warehouses__header-input"
                                placeholder="Search ..."
                            />
                        </div>
                        <Link to={"/addwarehouse"}>
                            <button className="warehouses__header-button">
                                <h3>+ Add New Warehouse</h3>
                            </button>
                        </Link>
                    </div>
                </section>

                <section>
                    <table className="warehouses__lists">
                        <thead className="warehouses__lists-headers">
                            <tr className="warehouses__lists-row">
                                {headers.map((header) => (
                                    <th className="warehouses__lists-cell">
                                        <h4>{header}</h4>
                                        <img
                                            className="warehouse__lists-icon"
                                            src={sortIcon}
                                            alt="sort icon"
                                        />
                                    </th>
                                ))}
                                <th className="warehouses__lists-cell warehouse__lists-actions">
                                    <h4>ACTIONS</h4>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="warehouses__lists-body">
                            {warehouses.map((warehouse) => (
                                <tr className="warehouses__lists-row">
                                    <td className="warehouses__lists-cell warehouses__lists--text-underline">
                                        <div className="warehouses__lists-title">
                                            WAREHOUSE
                                        </div>
                                        <br />
                                        <Link
                                            className="link"
                                            to={`/warehouses/${warehouse.id}`}
                                            onClick={handleLinkClick}
                                        >
                                            <h3 className="warehouse__name">
                                                {warehouse.warehouse_name}
                                            </h3>
                                            <img
                                                className="warehouse__lists-icon-chevron"
                                                src={chevronIcon}
                                                alt="chevron icon"
                                            />
                                        </Link>
                                    </td>
                                    <td className="warehouses__lists-cell">
                                        <div className="warehouses__lists-title">
                                            ADDRESS
                                        </div>
                                        <br />
                                        <p className="warehouse__info">
                                            {warehouse.address},{" "}
                                            {warehouse.city},{" "}
                                            {warehouse.country}
                                        </p>
                                    </td>
                                    <td className="warehouses__lists-cell">
                                        <div className="warehouses__lists-title">
                                            CONTACT NAME
                                        </div>
                                        <br />
                                        <p className="warehouse__info">
                                            {warehouse.contact_name}
                                        </p>
                                    </td>
                                    <td className="warehouses__lists-cell">
                                        <div className="warehouses__lists-title">
                                            CONTACT INFORMATION
                                        </div>
                                        <br />
                                        <p className="warehouse__info">
                                            {warehouse.contact_phone}
                                        </p>
                                        <br />
                                        <p className="warehouse__info">
                                            {warehouse.contact_email}
                                        </p>
                                    </td>
                                    <td className="warehouses__lists-cell warehouse__lists-actions">
                                        <img
                                            className="warehouses__lists-actions-icons"
                                            src={deleteIcon}
                                            alt="delete icon"
                                            onClick={() =>
                                                handleClick(warehouse)
                                            }
                                        />
                                        {/* <Link to={`/editwarehouse`}> uncomment this when it is ready*/}
                                        <img
                                            className="warehouses__lists-actions-icons"
                                            src={editIcon}
                                            alt="edit icon"
                                            // onClick={() => handleClickEdit(warehouse)}
                                        />
                                        {/* </Link> */}
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

export default WarehouseList;
