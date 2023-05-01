import "./EditInventory.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import InventoryList from "../InventoryList/InventoryListG";
import axios from "axios";


function EditInventory({ onclose }) {
    const [warehouses, setWarehouses] = useState([]);
    const [inventories, setInventories] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/inventories')
            .then(response => {
                if (response.data) {
                    setInventories(response.data)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
        , [])


    useEffect(() => {
        axios.post('http://localhost:8080/inventories')
            .then(response => {
                if (response.data) {
                    setInventories(response.data)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
        , [])

    useEffect(() => {
        axios.get('http://localhost:8080/warehouses')
            .then(response => {
                if (response.data) {
                    setWarehouses(response.data)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
        , [])



    return (
        <section className='inventory'>
            <div className="inventory__header">
                <img className="inventory__back-icon" src={backIcon} alt="Back icon" />
                <h1 className="inventory__title">
                    Edit Inventory Item
                </h1>
                {/* style h1 and other others separately */}
            </div>

            <section className="inventory-details-container">
                <div className="inventory-details">
                    <h2 className="inventory-details__title">
                        Item Details
                    </h2>

                    <label className="inventory-details__label">Item Name</label>
                    <input
                        type="text"
                        className="inventory-details__input"
                        placeholder="Television"
                    />

                    <label className="inventory-details__label">Description</label>
                    <textarea
                        type="text-area"
                        className="inventory-details__input-description"
                        placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'
                    />

                    <label className="inventory-details__label">Category</label>

                    <select
                        name="Category"
                        placeholder="Electronics"
                        className="inventory-details__input inventory-details__select"
                    >
                        <option value="electronics">Electronics</option>
                        <option value="gear">Gear</option>
                        <option value="Apparel">Apparel</option>
                        <option value="accessories">accessories</option>
                        <option value="health">health</option>
                        <img
                            className="inventory-details__arrow-icon"
                            alt="arrow icon"
                        />
                        {/* not styled */}
                    </select>
                </div>

                <hr className="inventory-details__hr" />

                <div className="inventory-details">
                    <h2 className="inventory-details__title">
                        Item Availability
                    </h2>

                    <label className="inventory-details__label">Status</label>

                    <div className='inventory-details__radio'>
                        <div class="inventory-details__radio-container">
                            <input
                                type="radio"
                                name="radio-button"
                                id="radio-button-1"
                                value="option1"
                                className="inventory-details__radio-input"
                            />
                            <label for="radio-button-1" className='inventory-details__radio-label'></label>
                            <span className='inventory-details__radio-status-option'>In Stock</span>
                        </div>
                        <div class="inventory-details__radio-container">
                            <input
                                type="radio"
                                name="radio-button"
                                id="radio-button-2"
                                value="option2"
                                className="inventory-details__radio-input"
                            />
                            <label for="radio-button-2" className='inventory-details__radio-label'></label>
                            <span className='inventory-details__status-option'>Out of Stock</span>
                        </div>
                    </div>

                    <label className="inventory-details__label">Quantity</label>
                    <input
                        type="number"
                        className="inventory-details__input"
                        placeholder="Quantity"
                    />

                    <label className="inventory-details__label">Warehouse</label>
                    <select
                        name="Warehouse"
                        placeholder="Please select"
                        className='inventory-details__input inventory-details__select'
                    >
                        {warehouses.map((warehouse) => (
                            <option
                                className=''
                                value={warehouse.id}
                            >{warehouse.warehouse_name}
                            </option>
                        ))}
                        <img
                            className="inventory-details__arrow-icon"
                            alt="arrow icon" />
                    </select>

                </div>
            </section>

            <div className="inventory-details__button">
                <div className="inventory-details__button-container">
                    <Link to={"/inventories"}>
                        <button
                            type="button"
                            className="inventory-details__button-1">Cancel</button>
                    </Link>
                </div>
                <div className="inventory-details__button-container">
                    <Link to={"/inventories"}>
                        <button type="button" className="inventory-details__button-2">Save</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default EditInventory;