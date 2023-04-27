import "./AddWarehouse.scss";
import { useRef } from "react";
import axios from "axios";

function AddWarehouse() {
    const onClick = "";

    return (
        <section>
            <h1>
                Add New Warehouse
            </h1>
            <hr/>
            <p>Warehouse Details</p>
            <form>
                <label className="">
                    Warehouse Name
                </label>
                <input className="" type="text" placeholder="Warehouse Name"></input>
                <label className="">
                    Street Address
                </label>
                <input className="" type="text" placeholder="Street Address"></input>
                <label className="">
                    City
                </label>
                <input className="" type="text" placeholder="City"></input>
                <label className="">
                    Country
                </label>
                <input className="" type="text" placeholder="Country"></input>

                <hr/>

                <p>Contact Details</p>
                <label className="">
                    Contact Name
                </label>
                <input className="" type="text" placeholder="Contact Name"></input>
                <label className="">
                    Position
                </label>
                <input className="" type="text" placeholder="Position"></input>                <label className="">
                    Phone Number
                </label>
                <input className="" type="text" placeholder="Phone Number"></input>                <label className="">
                    Email
                </label>
                <input className="" type="text" placeholder="Email"></input>

                <button type="button">Cancel</button>
                <button type="submit">+ Add Warehouse</button>
            </form>
        </section>
    )
}

export default AddWarehouse;