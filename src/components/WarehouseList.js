
import { useState, useEffect } from 'react';
import axios from 'axios'
import sortIcon from "../assets/Icons/sort-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";
import DeleteWarehouse from "../../src/components/DeleteWarehouse/DeleteWarehouse";
import Modal from "../../src/components/Modal/Modal";

function WarehouseList() {
    const [warehouses, setWarehouses] = useState([]);
    const headers = ["WAREHOUSE", "ADDRESS", "CONTACT NAME", "CONTACT INFORMATION"]
    const [isOpen, setIsOpen] = useState(false)
    const [warehouseToDelete, setWarehouseToDelete]= useState(null);

    function handleClick(warehouse) {
        console.log(warehouse);
        setIsOpen(true);
        setWarehouseToDelete(warehouse);
    }


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
        <>
            <div className="">
                <Modal open={isOpen}>
                    <DeleteWarehouse warehouseToDelete={warehouseToDelete}
                     onclose={() => setIsOpen(false)}>
                    </DeleteWarehouse>
                </Modal>
            </div>

            <section className='warehouses'>
                <section className='warehouses__header'>
                    <h1 className='warehouses__header-title'>Warehouses</h1>
                    <div className='warehouses__header-search-container'>
                        <div className='warehouses__header-search'>
                            <img className='warehouses__header-image' src='../assets/Icons/search-24px.svg' alt="search icon" />
                            <input type='text' className='warehouses__header-input' placeholder='Search ...' />
                        </div>
                        <button className='warehouses__header-button'>+ Add New Warehouse</button>
                    </div>
                </section>


                <section className='warehouses__lists'>
                    <table className='warehouses__lists-content'>
                        <thead className='warehouses__lists-content-header'>
                            <tr className='warehouses__lists-content-row'>{headers.map((header, index) =>
                                <th key={index} className='warehouse__lists-content-header-sort'>
                                    {header}
                                    <img className='warehouses__list-content-header-row-image' src={sortIcon} alt="sort icon" />
                                </th>)
                            }
                                <th className='warehouses__header warehouses__row-cell warehouses__row-actions'></th>
                            </tr>
                        </thead>


                        <tbody className='warehouses__list-content-rows'>
                            {warehouses.map((warehouses, index) =>
                                <tr key={index} className='warehouses__list-content-row'>
                                    <td className=''>
                                        <div className=''>WAREHOUSE</div>
                                        <br />
                                        <a>{warehouses.warehouse_name}</a>
                                        <img className='image' src={chevronIcon} alt="chevron icon" />
                                    </td>
                                    <td className=''>
                                        <div>ADDRESS</div>
                                        <br />
                                        {warehouses.address}
                                    </td>
                                    <td className=''>
                                        <div>CONTACT NAME</div>
                                        <br />
                                        {warehouses.contact_name}
                                    </td>
                                    <td className=''>
                                        <div>CONTACT INFORMATION</div>
                                        <br />{warehouses.contact_phone}
                                        <br />{warehouses.contact_email}
                                    </td>
                                    <td className=''>
                                        <img
                                            className='image_action'
                                            src={deleteIcon}
                                            alt='delete icon'
                                            onClick={() => handleClick(warehouses)}
                                        />
                                        <img className='image_action' src={editIcon} alt='edit icon' />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </section>
        </>
    )
}

export default WarehouseList













































