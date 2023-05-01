import "./AddInventory.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


function AddInventory({ onclose }) {
    const formRef = useRef();
    const [warehouses, setWarehouses] = useState([]);
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();


    const addInventory = (e) => {
        e.preventDefault();
        const warehouse_id = formRef.current.warehouse.value;
        const item_name = formRef.current.itemName.value;
        const description = formRef.current.description.value;
        const category = formRef.current.category.value;
        const status = formRef.current.status.value;
        const quantity = formRef.current.quantity.value;

        if(!warehouse_id || !item_name || !description || !category || !status || !quantity) {
            alert("Please fill out all fields before saving!");
            return;
        }

        axios.post('http://localhost:8080/inventories/', {
            warehouse: warehouse_id, 
            itemName: item_name, 
            description: description,
            category: category,
            status: status,
            quantity: status
        })
            .then((response) => {
                setInventories(response.data)
                console.log(response.data)
                navigate("/inventories")
            })
            .catch(error => {
                console.log(error);
            })
    };


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
                <form onSubmit={addInventory} ref={formRef}>
            <div className="inventory__header">
                <img className="inventory__back-icon" src={backIcon} alt="Back icon" />
                <h1 className="inventory__title">
                    Add New Inventory Item
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
                            placeholder="Item Name"
                        />

                        <label className="inventory-details__label">Description</label>
                        <textarea
                            type="text-area"
                            className="inventory-details__input-description"
                            placeholder="Please enter a brief item description..."
                        />

                        <label className="inventory-details__label">Category</label>
                        <select
                            name="Category"
                            placeholder="Please select"
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
                        <button
                            type="button"
                            className="inventory-details__button-2">
                            + Add Item</button>
                    </Link>
                </div>
            </div>
        </form>
        </section >
    )
}

export default AddInventory;