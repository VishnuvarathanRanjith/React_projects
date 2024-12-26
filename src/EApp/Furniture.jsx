
import FurnitureCart from './FurnitureCart.jsx';
import React, { useState } from 'react'

export default function Furniture() {
    const [FurnitureData,setFurnitureData]=useState(false);
    const showFurniture=()=>{
        setFurnitureData(true);
    }
  return (
      
    <div className='container'>
        {!FurnitureData?(
      <table>
        <tr>
            <td>
                <img src="https://t3.ftcdn.net/jpg/05/28/57/64/360_F_528576447_j08koWfGyhXMweJzDz6qzx6yYBBKJSnM.jpg" alt='Furnitures' width='150px'
                height='150px'  onClick={showFurniture}/>
            </td>
            </tr>
            <tr>
            <td>
                Furnitures
            </td>
            </tr>
      </table>):
      (<FurnitureCart />)
    }
    </div>
    )
}    

