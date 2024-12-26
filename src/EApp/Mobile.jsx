
import MobileCart from './MobileCart.jsx';
import React, { useState } from 'react'

export default function Mobile() {
    const [MobileData,setMobileData]=useState(false);
    const showMobile=()=>{
        setMobileData(true);
    }
  return (
      
    <div className='Mobile'>
        {!MobileData?(
      <table>
        <tr>
            <td>
                <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/e/d/r/-original-imagmym54wrhzgpn.jpeg?q=90&crop=false" alt='Mobiles' width='150px'
                height='150px'  onClick={showMobile}/>
            </td>
            </tr>
            <tr>
            <td>
                Mobiles
            </td>
            </tr>
      </table>):
      (<MobileCart />)
    }
    </div>
    )
}    

