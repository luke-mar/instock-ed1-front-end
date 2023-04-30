import "./EditWarehouse.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditWarehouse({warehouseToEdit}) {
    const formRef = useRef();
    const [warehouses, setWarehouses] = useState();
    const navigate = useNavigate();
    
    const {id, warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email} = warehouseToEdit;
    const editWarehouse = (e) => {
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
            alert("Please fill out all fields before saving!");
            return;
        }

        if(contact_phone.length < 10) {
            alert("Please enter a valid phone number, including the area code.");
            return;
        }

        if(!contact_email.includes("@") || !contact_email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        axios.put(`http://localhost:8080/warehouses/${id}`, {warehouse_name, address, city, country, contact_name, contact_position,
        contact_phone, contact_email}).then((response) => {
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
                    Edit Warehouse
                </h1>
            </div>
            <p className="warehouse__header">Warehouse Details</p>
            <form className="warehouse__form" onSubmit={editWarehouse} ref={formRef}>
                <section className="warehouse__formContactDetails">
                    <label className="warehouse__formLabel">
                        Warehouse Name
                    </label>
                    <input className="warehouse__formInput" type="text" name="warehouseName" placeholder="Warehouse Name" defaultValue={warehouse_name}></input>
                    <label className="warehouse__formLabel">
                        Street Address
                    </label>
                    <input className="warehouse__formInput" type="text" name="streetAddress" placeholder="Street Address" defaultValue={address}></input>
                    <label className="warehouse__formLabel">
                        City
                    </label>
                    <input className="warehouse__formInput" type="text" name="city" placeholder="City" defaultValue={city}></input>
                    <label className="warehouse__formLabel">
                        Country
                    </label>
                    <input className="warehouse__formInput" type="text" name="country" placeholder="Country" defaultValue={country}></input>
                </section>
                <hr/>
                <section className="warehouse__formContactDetails">
                    <p className="warehouse__header warehouse__header--insideForm">Contact Details</p>
                    <label className="warehouse__formLabel">
                        Contact Name
                    </label>
                    <input className="warehouse__formInput" type="text" name="contactName" placeholder="Contact Name" defaultValue={contact_name}></input>
                    <label className="warehouse__formLabel">
                        Position
                    </label>
                    <input className="warehouse__formInput" type="text" name="position" placeholder="Position" defaultValue={contact_position}></input>                
                    <label className="warehouse__formLabel">
                        Phone Number
                    </label>
                    <input className="warehouse__formInput" type="text" name="phoneNumber" placeholder="Phone Number" defaultValue={contact_phone}></input>                
                    <label className="warehouse__formLabel">
                        Email
                    </label>
                    <input className="warehouse__formInput" type="text" name="email" placeholder="Email" defaultValue={contact_email}></input>

                    <div className="warehouse__formButtons">
                        <Link to={"/warehouses"}><button type="button">Cancel</button></Link>
                        <button type="submit">Save</button>
                    </div>
                </section>
            </form>
        </section>
    )
}

export default EditWarehouse;