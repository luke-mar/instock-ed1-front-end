import "./EditInventory.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditInventory({ inventoryToEdit, setEditCount }) {
    const formRef = useRef();
    const navigate = useNavigate();
    const [warehouses, setWarehouses] = useState([]);
    const [inventories, setInventories] = useState([]);
    const params = useParams();

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8080/inventories/${params.id}`)
            .then((response) => {
                if (response.data) {
                    setInventories(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8080/warehouses`)
            .then((response) => {
                if (response.data) {
                    setWarehouses(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    })

    const editInventory = (e) => {
        e.preventDefault();
        const warehouse_id = formRef.current.warehouse.value;
        const item_name = formRef.current.itemName.value;
        const description = formRef.current.description.value;
        const category = formRef.current.category.value;
        const status = formRef.current.status.value;
        const quantity = parseInt(formRef.current.quantity.value, 10);

        if (
            !warehouse_id ||
            !item_name ||
            !description ||
            !category ||
            !status ||
            quantity === undefined || isNaN(quantity)
        ) {
            alert("Please fill out all fields before saving!");
            return;
        }

        if (quantity.length < 1) {
            alert("Please enter an amount.");
            return;
        }

        if (description.length < 1) {
            alert("Please enter a description.");
            return;
        }

        console.log("Submitted data:");
        console.log("Warehouse ID:", warehouse_id);
        console.log("Item Name:", item_name);
        console.log("Description:", description);
        console.log("Category:", category);
        console.log("Status:", status);
        console.log("Quantity:", quantity);
        
        axios
            .put(`http://localhost:8080/inventories/${params.id}`, {
                warehouse_id,
                item_name,
                description,
                category,
                status,
                quantity,
            })
            .then((response) => {
                if (response.data) {
                    setInventories(response.data);
                    navigate(`/warehouses/${warehouse_id}`)
                }
            })
            .catch((error) => {
                console.log(error);
                console.log(error.response);
            });
    };

    return (
        <section className="inventory">
            <form onSubmit={editInventory} ref={formRef}>
                <div className="inventory__header">
                    <img
                        className="inventory__back-icon"
                        onClick={handleBackClick}
                        src={backIcon}
                        alt="Back icon"
                    />
                    <h1 className="inventory__title">Edit Inventory Item</h1>
                </div>
                <section className="inventory-details-container">
                    <div className="inventory-details">
                        <h2 className="inventory-details__title">
                            Item Details
                        </h2>

                        <label className="inventory-details__label">
                            Item Name
                        </label>
                        <input
                            type="text"
                            name="itemName"
                            className="inventory-details__input"
                            placeholder={inventories.item_name}
                            defaultValue={inventories.item_name}
                        />

                        <label className="inventory-details__label">
                            Description
                        </label>
                        <textarea
                            type="text-area"
                            name="description"
                            className="inventory-details__input-description"
                            placeholder={inventories.description}
                            defaultValue={inventories.description}
                        />

                        <label className="inventory-details__label">
                            Category
                        </label>

                        <select
                            name="category"
                            placeholder="Electronics"
                            className="inventory-details__input inventory-details__select"
                            defaultValue={inventories.category}
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
                        </select>
                    </div>

                    <hr className="inventory-details__hr" />

                    <div className="inventory-details">
                        <h2 className="inventory-details__title">
                            Item Availability
                        </h2>

                        <label className="inventory-details__label">
                            Status
                        </label>

                        <div className="inventory-details__radio">
                            <div class="inventory-details__radio-container">
                                <input
                                    type="radio"
                                    name="status"
                                    id="radio-button-1"
                                    value="In Stock"
                                    className="inventory-details__radio-input"
                                />
                                <label
                                    for="radio-button-1"
                                    className="inventory-details__radio-label"
                                ></label>
                                <span className="inventory-details__radio-status-option">
                                    In Stock
                                </span>
                            </div>
                            <div class="inventory-details__radio-container">
                                <input
                                    type="radio"
                                    name="status"
                                    id="radio-button-2"
                                    value="Out of Stock"
                                    className="inventory-details__radio-input"
                                />
                                <label
                                    for="radio-button-2"
                                    className="inventory-details__radio-label"
                                ></label>
                                <span className="inventory-details__status-option">
                                    Out of Stock
                                </span>
                            </div>
                        </div>

                        <label className="inventory-details__label">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            className="inventory-details__input"
                            placeholder={inventories.quantity}
                        />

                        <label className="inventory-details__label">
                            Warehouse
                        </label>
                        <select
                            name="warehouse"
                            key={inventories.warehouse_id}
                            defaultValue={inventories.warehouse_id}
                            placeholder="Please select"
                            className="inventory-details__input inventory-details__select"
                        >
                            {warehouses.map((warehouse) => (
                                
                                <option 
                                key={warehouse.id} 
                                value={warehouse.id}>
                                    {warehouse.warehouse_name}
                                </option>
                            ))}
                            <img
                                className="inventory-details__arrow-icon"
                                alt="arrow icon"
                            />
                        </select>
                    </div>
                </section>
                <div className="inventory-details__button">
                    <div className="inventory-details__button-container">
                            <button
                                type="button"
                                className="inventory-details__button-1"
                                onClick={handleBackClick}
                            >
                                Cancel
                            </button>
                    </div>
                    <div className="inventory-details__button-container">
                            <button
                                type="submit"
                                className="inventory-details__button-2"
                            >
                                Save
                            </button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default EditInventory;
