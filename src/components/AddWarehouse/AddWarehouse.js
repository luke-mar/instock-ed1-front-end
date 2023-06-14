import "./AddWarehouse.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function AddWarehouse({onclose}) {
    const formRef = useRef();
    const [warehouses, setWarehouses] = useState();
    const navigate = useNavigate();

    const addWarehouse = (e) => {
        e.preventDefault();
        const warehouse_name = formRef.current.warehouseName.value;
        const address = formRef.current.streetAddress.value;
        const city = formRef.current.city.value;
        const country = formRef.current.country.value;
        const contact_name = formRef.current.contactName.value;
        const contact_position = formRef.current.position.value;
        const contact_phone = formRef.current.phoneNumber.value;
        const contact_email = formRef.current.email.value;

        if(!warehouse_name || !address || !city || !country || !contact_name || ! contact_position || ! contact_phone || !contact_email) {
            alert("Please fill out all fields before submitting!");
            return;
        }

        if(!contact_phone.match(/^[0-9]+$/) || contact_phone.length !== 10) {
            alert("Please enter a valid phone number, including the area code. The entry must be 10 digits.");
            return;
        }

        if(!contact_email.includes("@") || !contact_email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        axios.post("http://localhost:8080/warehouses/", {
            warehouse_name, 
            address, city, 
            country, 
            contact_name, 
            contact_position,
            contact_phone, 
            contact_email})
            .then((response) => {
            setWarehouses(response.data)
            navigate("/warehouses")
        })
        .catch((error) => {
            console.log(error)
        })
    };

    return (
        <section className="warehouse">
            <div className="warehouse__h1Container">
                <Link className="warehouse__link" to="/warehouses">
                    <img src={backIcon} alt="Back icon"></img>
                </Link>
                <h1 className="warehouse__h1">
                    Add New Warehouse
                </h1>
            </div>
            <form className="warehouse__form" onSubmit={addWarehouse} ref={formRef}>
                <div className="warehouse__formDetails">
                    <section className="warehouse__formWarehouseDetails">
                        <p className="warehouse__header">Warehouse Details</p>
                        <label className="warehouse__formLabel">
                            Warehouse Name
                        </label>
                        <input className="warehouse__formInput" type="text" name="warehouseName" placeholder="Warehouse Name"></input>
                        <label className="warehouse__formLabel">
                            Street Address
                        </label>
                        <input className="warehouse__formInput" type="text" name="streetAddress" placeholder="Street Address"></input>
                        <label className="warehouse__formLabel">
                            City
                        </label>
                        <input className="warehouse__formInput" type="text" name="city" placeholder="City"></input>
                        <label className="warehouse__formLabel">
                            Country
                        </label>
                        <input className="warehouse__formInput" type="text" name="country" placeholder="Country"></input>
                    </section>
                    <section className="warehouse__formContactDetails">
                        <p className="warehouse__header">Contact Details</p>
                        <label className="warehouse__formLabel">
                            Contact Name
                        </label>
                        <input className="warehouse__formInput" type="text" name="contactName" placeholder="Contact Name"></input>
                        <label className="warehouse__formLabel">
                            Position
                        </label>
                        <input className="warehouse__formInput" type="text" name="position" placeholder="Position"></input>                
                        <label className="warehouse__formLabel">
                            Phone Number
                        </label>
                        <input className="warehouse__formInput" type="text" name="phoneNumber" placeholder="Phone Number"></input>                
                        <label className="warehouse__formLabel">
                            Email
                        </label>
                        <input className="warehouse__formInput" type="text" name="email" placeholder="Email"></input>
                    </section>
                    </div>
                    <div className="warehouse__formButtons">
                        <div className="warehouse__formCancelContainer">
                            <Link to={"/warehouses"}>
                                <button type="button" className="warehouse__formCancelButton">Cancel</button>
                            </Link>
                        </div>
                        <button type="submit" className="warehouse__formAddButton">+ Add Warehouse</button>
                    </div>
        </form>
        </section>
    )
}

export default AddWarehouse;