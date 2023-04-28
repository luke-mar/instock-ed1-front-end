import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";
import Modal from "../Modal/Modal";
import "./WarehouseList.scss";

function WarehouseList() {
    const [warehouses, setWarehouses] = useState([]);
    // const [warehouse, setWarehouse] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [warehouseToDelete, setWarehouseToDelete] = useState(null);

    // const headers = [
    //     "WAREHOUSE",
    //     "ADDRESS",
    //     "CONTACT NAME",
    //     "CONTACT INFORMATION",
    // ];

    function handleLinkClick(event){
        const warehouseId = event.target.id;
        console.log(warehouseId);
    }

    function handleClick(click) {
        console.log(click);
        setIsOpen(true);
        setWarehouseToDelete(click);
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/warehouses")
            .then((response) => {
                if (response.data) {
                    setWarehouses(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="">
                <Modal open={isOpen}>
                    <DeleteWarehouse
                        warehouseToDelete={warehouseToDelete}
                        onclose={() => setIsOpen(false)}
                    ></DeleteWarehouse>
                </Modal>
            </div>

            <section className="warehouses">
                <section className="warehouses__header">
                    <h1 className="warehouses__header-title">Warehouses</h1>
                    <div className="warehouses__header-search-container">
                        <div className="warehouses__header-search">
                            <img
                                className="warehouses__header-image"
                                src="../assets/Icons/search-24px.svg"
                                alt="search icon"
                            />
                            <input
                                type="text"
                                className="warehouses__header-input"
                                placeholder="Search ..."
                            />
                        </div>
                        <button className="warehouses__header-button">
                            + Add New Warehouse
                        </button>
                    </div>
                </section>

                <section className="warehouses__lists">
                    <div className="warehouses__lists-header">
                        <div className="warehouses__lists-header-column-title">
                            <h4>WAREHOUSE</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                        <div className="warehouses__lists-header-column-title">
                            <h4>ADDRESS</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                        <div className="warehouses__lists-header-column-title">
                            <h4>CONTACT NAME</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                        <div className="warehouses__lists-header-column-title">
                            <h4>CONTACT INFORMATION</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                        <div className="warehouses__lists-header-column-title">
                            <h4>ACTION</h4>
                            <img src={sortIcon} alt="sort icon" />
                        </div>
                    </div>

                    <div className="warehouses__list-content-rows">
                        {warehouses.map((warehouseData) => (
                            <div
                                key={warehouseData.id}
                                className="warehouses__list-content-row"
                            >
                                <div className="warehouses__list-content-row-container">
                                    <Link
                                        key={warehouseData.id}
                                        className="warehouses__name"
                                        to={`/warehouses/${warehouseData.id}`}
                                        warehouse={warehouseData}
                                        onClick={handleLinkClick}
                                    >
                                        <h3>{warehouseData.warehouse_name}</h3>
                                        <img
                                            className="image"
                                            src={chevronIcon}
                                            alt="chevron icon"
                                        />
                                    </Link>
                                </div>
                                <div className="warehouses__list-content-row-container">
                                    <p>{warehouseData.address}</p>
                                </div>
                                <div className="warehouses__list-content-row-container">
                                    <p>{warehouseData.contact_name}</p>
                                </div>
                                <div className="warehouses__list-content-row-container phone-email">
                                    <p>{warehouseData.contact_phone}</p>
                                    <p>{warehouseData.contact_email}</p>
                                </div>
                                <div className="warehouses__list-content-row-container">
                                    <img
                                        className="image_action"
                                        src={deleteIcon}
                                        alt="delete icon"
                                        onClick={() => handleClick(warehouseData)}
                                    />
                                    <img
                                        className="image_action"
                                        src={editIcon}
                                        alt="edit icon"
                                    />
                                </div>
                                {/* <td className="">
                                        <div className="">WAREHOUSE</div>
                                        <br />
                                        <Link 
                                        className="warehouses__name" 
                                        to={`/warehouses/${warehouse.id}`}
                                        warehouse={warehouse.id}>{warehouse.warehouse_name}</Link>
                                        <img
                                            className="image"
                                            src={chevronIcon}
                                            alt="chevron icon"
                                        />
                                    </td>
                                    <td className="">
                                        <div>ADDRESS</div>
                                        <br />
                                        {warehouse.address}
                                    </td>
                                    <td className="">
                                        <div>CONTACT NAME</div>
                                        <br />
                                        {warehouse.contact_name}
                                    </td>
                                    <td className="">
                                        <div>CONTACT INFORMATION</div>
                                        <br />
                                        {warehouse.contact_phone}
                                        <br />
                                        {warehouse.contact_email}
                                    </td>
                                    <td className="">
                                        <img
                                            className="image_action"
                                            src={deleteIcon}
                                            alt="delete icon"
                                            onClick={() =>
                                                handleClick(warehouse)
                                            }
                                        />
                                        <img
                                            className="image_action"
                                            src={editIcon}
                                            alt="edit icon"
                                        />
                                    </td> */}
                            </div>
                        ))}
                    </div>

                    {/* <table className="warehouses__lists-content">
                        <thead className="warehouses__lists-content-header">
                            <tr className="warehouses__lists-content-row">
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        className="warehouse__lists-content-header-sort"
                                    >
                                        {header}
                                        <img
                                            className="warehouses__list-content-header-row-image"
                                            src={sortIcon}
                                            alt="sort icon"
                                        />
                                    </th>
                                ))}
                                <th className="warehouses__header warehouses__row-cell warehouses__row-actions"></th>
                            </tr>
                        </thead> */}
                    {/* <tbody className="warehouses__list-content-rows"> */}
                    {/* {warehouses.map((warehouse, index) => (
                                <tr
                                    key={warehouse.id}
                                    className="warehouses__list-content-row"
                                >
                                    <td className="">
                                        <div className="">WAREHOUSE</div>
                                        <br />
                                        <Link 
                                        className="warehouses__name" 
                                        to={`/warehouses/${warehouse.id}`}
                                        warehouse={warehouse.id}>{warehouse.warehouse_name}</Link>
                                        <img
                                            className="image"
                                            src={chevronIcon}
                                            alt="chevron icon"
                                        />
                                    </td>
                                    <td className="">
                                        <div>ADDRESS</div>
                                        <br />
                                        {warehouse.address}
                                    </td>
                                    <td className="">
                                        <div>CONTACT NAME</div>
                                        <br />
                                        {warehouse.contact_name}
                                    </td>
                                    <td className="">
                                        <div>CONTACT INFORMATION</div>
                                        <br />
                                        {warehouse.contact_phone}
                                        <br />
                                        {warehouse.contact_email}
                                    </td>
                                    <td className="">
                                        <img
                                            className="image_action"
                                            src={deleteIcon}
                                            alt="delete icon"
                                            onClick={() =>
                                                handleClick(warehouse)
                                            }
                                        />
                                        <img
                                            className="image_action"
                                            src={editIcon}
                                            alt="edit icon"
                                        />
                                    </td>
                                </tr> */}
                    {/* ))} */}
                    {/* </tbody> */}
                    {/* </table> */}
                </section>
            </section>
        </>
    );
}

export default WarehouseList;
