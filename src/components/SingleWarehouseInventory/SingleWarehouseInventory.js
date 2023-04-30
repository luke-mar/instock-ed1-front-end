import "./SingleWarehouseInventory.scss"
import edit from '../../assets/Icons/edit-24px.svg'
import deleteImg from '../../assets/Icons/delete_outline-24px.svg'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

function SingleWarehouseInventory(props) {
  const [inventoryList, setInventoryList] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:8080/warehouses/${props.id}/inventories`)
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
                inventoryList.map (invent =>{
                    return (
                        <Link to={`/inventories/${invent.id}`}>
                        <div className="inventory-item">
                            <p className="inventory-item__name">{invent.item_name} </p>
                            <p className="inventory-item__category">{invent.category}</p>
                            <p className={invent.status.replace(/\s+/g, '-').toLowerCase()}>{invent.status}</p>
                            <div className="row">
                              <p className="inventory-item__quantity">{invent.quantity}</p>                               
                              <div className="inventory-item__icons">
                                  <img className="delete" src={deleteImg}></img>
                                  <img src={edit}></img>
                              </div>
                              </div>
                        </div>  
                        </Link>
                    );
                })
            }
        </div> 
        </>
    );
}

export default SingleWarehouseInventory;
