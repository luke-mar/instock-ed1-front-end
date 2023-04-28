
import { useState, useEffect } from 'react';
import axios from 'axios'
import sortIcon from "../assets/Icons/sort-24px.svg";
import chevronIcon from "../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/Icons/delete_outline-24px.svg";
import editIcon from "../assets/Icons/edit-24px.svg";

function WarehouseList() {
    const [warehouses, setWarehouses] = useState([]);
    const headers = ["WAREHOUSE", "ADDRESS", "CONTACT NAME", "CONTACT INFORMATION"]



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

        <section className='warehouses'>
            <section className='warehouses__header'>
                <h1 className='warehouses__header-title'>Warehouses</h1>
                {/* remove classname on H1 */}
                <div className='warehouses__header-search-container'>
                    <div className='warehouses__header-search'>
                        <img className='warehouses__header-image' src='../assets/Icons/search-24px.svg' alt="search icon" />
                        <input type='text' className='warehouses__header-input' placeholder='Search ...' />
                    </div>
                    <button className='warehouses__header-button'>+ Add New Warehouse</button>
                </div>
            </section>


            <section>
                <table className='warehouses-lists'>
                    <thead className='warehouses-lists__headers'>
                        <tr className='warehouses-lists__headers-row'>{headers.map((header, index) =>
                            <th key={index} className='warehouses-lists__headers-sort warehouses-lists__row-cell'>
                                {/* check if names are being used */}
                                {header}
                                <img className='warehouses-lists__sort-image' src={sortIcon} alt="sort icon" />
                            </th>)
                        }
                            <th className='warehouses-lists__row-cell warehouses-lists__row-actions warehouses-lists__action-title'>ACTIONS</th>
                        </tr>
                    </thead>


                    <tbody className='warehouses-lists__content-rows'>
                        {warehouses.map((warehouses, index) =>
                            <tr key={index} className='warehouses__list-content-row'>
                                <td className='warehouses-list__row-cell warehouses-list__warehouse'>
                                    <div className='warehouse-list__title'>WAREHOUSE</div>
                                    <br />
                                    {/* include link tag; replace a tag; */}
                                    <a>{warehouses.warehouse_name}</a>
                                    <img className='warehouse-list__chevron-image' src={chevronIcon} alt="chevron icon" />
                                </td>
                                <td className='warehouses-list__row-cell'>
                                    <div className='warehouse-list__title'>ADDRESS</div>
                                    <br />
                                    {warehouses.address}
                                </td>
                                <td className='warehouses-list__row-cell'>
                                    <div>CONTACT NAME</div>
                                    <br />
                                    {warehouses.contact_name}
                                </td>
                                <td className='warehouses-list__row-cell'>
                                    <div>CONTACT INFORMATION</div>
                                    <br />{warehouses.contact_phone}
                                    <br />{warehouses.contact_email}
                                </td>
                                <td className='warehouses-lists__row-cell warehouses-list__row-actions' >
                                    <img className='warehouse-lists__icons' src={deleteIcon} alt='delete icon' />
                                    <img className='warehouse-lists__icons' src={editIcon} alt='edit icon' />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </section>
    )
}

export default WarehouseList













































