import React from 'react';

function Mobile1(){
    return(
        <div className='chair'>
            <table>
                <tr>
                    <td>
                        <img src="https://i03.appmifile.com/791_item_in/04/07/2024/88e7985074e520283c26a5a96843b27d.jpg" 
                        alt="redmi 13 c" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                    Redmi 13 c
                    </td>
                </tr>
                <tr>
                    <td>
                        15000
                    </td>
                </tr>
            </table>
        </div>
    )
}
function Mobile2(){
    return(
        <div className='sofa'>
            <table>
                <tr>
                    <td>
                        <img src="https://vasanthandco.in/UploadedFiles/productimages/20240622113325-61p9OByM1kL._SX679_.jpg" 
                        alt="Vivo y200e" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                   Vivo Y200e 5G
                    </td>
                </tr>
                <tr>
                    <td>
                        30000
                    </td>
                </tr>
            </table>
        </div>
    )
}
function Mobile3(){
    return(
        <div className='bed'>
            <table>
                <tr>
                    <td>
                        <img src="https://www.maplestore.in/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1__en-IN.jpg?v=1727251001&width=823" 
                        alt="Iphone" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        iPhone 16 pro
                    </td>
                </tr>
                <tr>
                    <td>
                        100000
                    </td>
                </tr>
            </table>
        </div>
    )
}
function Mobile4(){
    return(
        <div className='table'>
            <table>
                <tr>
                    <td>
                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=90&crop=false" 
                        alt="Redmi Note 13 pro" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                    Redmi Note 13 pro
                    </td>
                </tr>
                <tr>
                    <td>
                        33000
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default function MobileCart() {
  return (
    <div className='Furniture'>
    <Mobile1/>
    <Mobile2/>
    <Mobile3/>
    <Mobile4/>
    </div>
    
  )
}
