import "./SingleWarehouseInventory.scss"
import edit from '../../assets/Icons/edit-24px.svg'
import deleteImg from '../../assets/Icons/delete_outline-24px.svg'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function SingleWarehouseInventory(props) {
  const [inventoryList, setInventoryList] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:8080/inventories`)
      .then((response) => {
        if(response.data){
        setInventoryList(response.data);
        }
      });
    }, []);
    console.log(inventoryList);
    return (
        <>
          <div className="inventory-titles">
            <p className="inventory-titles__text">INVENTORY ITEM</p>
            <p className="inventory-titles__text">CATEGORY</p>
            <p className="inventory-titles__text">STATUS</p>
            <div className="row">
                <p className="inventory-titles__text2">QUANTITY</p>
                <p className="inventory-titles__last-text">ACTIONS</p>
                </div>    
          </div>
        
        <div className="column">
            {
                inventoryList.filter(item => item.warehouse_name === 'Manhattan').map (invent =>{
                    return (
                        <div className="inventory-item">
                            <p className="inventory-item__name">{invent.item_name} </p>
                            <p className="inventory-item__category">{invent.category}</p>
                            <p className="inventory-item__stock">{invent.status}</p>
                            <div className="row">
                                <p className="inventory-item__quantity">{invent.quantity}</p>
                                <div className="inventory-item__icons">
                                    <img src={deleteImg}></img>
                                    <img src={edit}></img>
                                </div>
                            </div>  
                        </div>
                    );
                })
            }
        </div> 
        </>
    );
}

export default SingleWarehouseInventory;