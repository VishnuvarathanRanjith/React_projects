
import ElectronicsCart from './ElectronicsCart.jsx';
import React, { useState } from 'react'

export default function Electronics() {
    const [ElectronicsData,setElectronicsData]=useState(false);
    const showElectronics=()=>{
        setElectronicsData(true);
    }
  return (
      
    <div className='Electronics'>
        {!ElectronicsData?(
      <table>
        <tr>
            <td>
                <img src="https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg" alt='Electronics' width='150px'
                height='150px'  onClick={showElectronics}/>
            </td>
            </tr>
            <tr>
            <td>
                Electronicss
            </td>
            </tr>
      </table>):
      (<ElectronicsCart />)
    }
    </div>
    )
}    

