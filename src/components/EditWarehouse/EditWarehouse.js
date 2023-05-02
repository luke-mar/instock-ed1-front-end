import "./EditWarehouse.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditWarehouse(props) {

    const formRef = useRef();
    const [warehouses, setWarehouses] = useState();
    const navigate = useNavigate();
    const params = useParams();
    const [warehouseToEdit, setWarehouseToEdit] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/warehouses/${params.id}`)
            .then((response) => {
                setWarehouseToEdit(response.data);
                props.setEditCount();
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params.id]);

    if(warehouseToEdit === null) {
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
                <div>Please go back and choose a warehouse to edit.</div>
            </section>
        );
    }

    const handleBackClick = () => {
        navigate(-1);
    };
    
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

        if(!contact_phone.match(/^[0-9]+$/) || contact_phone.length !== 10) {
            alert("Please enter a valid phone number, including the area code. The entry must be 10 digits.");
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
    }

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
            <form className="warehouse__form" onSubmit={editWarehouse} ref={formRef}>
                <div className="warehouse__formDetails">
                    <section className="warehouse__formWarehouseDetails">
                        <p className="warehouse__header">Warehouse Details</p>
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
                    <section className="warehouse__formContactDetails">
                        <p className="warehouse__header">Contact Details</p>
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
                    </section>
                </div>
                <div className="warehouse__formButtons">
                    <div className="warehouse__formCancelContainer">
                        <Link to={"/warehouses"}>
                            <button type="button" className="warehouse__formCancelButton">Cancel</button>
                        </Link>
                    </div>
                    <button type="submit" className="warehouse__formSaveButton" onClick={handleBackClick}>Save</button>
                </div>
            </form>
        </section>
    )
};

export default EditWarehouse;