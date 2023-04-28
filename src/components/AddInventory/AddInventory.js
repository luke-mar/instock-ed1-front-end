import "./AddInventory.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function AddInventory({ onclose }) {
    
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



    return (
        <section className="inventory">
            <div className="inventory__h1-container">
                <img className="inventory__back-icon" src={backIcon} alt="Back icon" />
                <h1 className="inventory_title">
                    Add New Warehouse
                </h1>
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
                        placeholder="Item Name"
                    />

                    <label className="inventory-details__label">Description</label>
                    <textarea
                        type="text-area"
                        className="inventory-details__input-description"
                        placeholder="Please enter a brief item description..."
                    />

                    <label className="inventory-details__label">Category</label>

                    <select name="Category" placeholder="Please select" className="inventory-details__input inventory-details__select">
                        <option value="electronics">Electronics</option>
                        <option value="gear">Gear</option>
                        <option value="Apparel">Apparel</option>
                        <option value="accessories">accessories</option>
                        <option value="health">health</option>
                        <img className="inventory-details__arrow-icon" alt="arrow icon" />
                    </select>
                    <hr />
                </div>


                <div className="inventory-details">
                    <h2 className="inventory-details__title">
                        Item Availability
                    </h2>

                    <label className="inventory-details__label">Status</label>

                    <div className='inventory-details__radio'>
                        <div class="inventory-details__radio-container">
                            <input type="radio" name="radio-button" id="radio-button-1" value="option1" />
                            <label for="radio-button-1" className='inventory-details__label'></label>
                            <span className='inventory-details__status-option'>In Stock</span>
                        </div>
                        <div class="radio-container">
                            <input type="radio" name="radio-button" id="radio-button-2" value="option2" />
                            <label for="radio-button-2" className='inventory-details__label'></label>
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
                    <select name="Warehouse" placeholder="Please select" className='inventory-details__input inventory-details__select'>
                    {warehouses.map((warehouse) => (
                        <option
                            className=''
                            value={warehouse.id}
                        >{warehouse.warehouse_name}
                        </option>
                    ))}
                      <img className="inventory-details__arrow-icon" alt="arrow icon"/>
                </select>

                </div>


                        <div className="warehouse__formButtons">
                            <Link to={"/inventories"}><button type="button">Cancel</button></Link>
                            <Link to={"/inventories"}><button type="button">+ Add Item</button></Link>
                        </div>
            </section>
        </section>
    )
}

export default AddWarehouse;