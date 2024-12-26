import React from 'react';

function Chair(){
    return(
        <div className='chair'>
            <table>
                <tr>
                    <td>
                        <img src="https://ii1.pepperfry.com/media/catalog/product/a/p/1100x1210/appleby-sheesham-wood-arm-chair-in-provincial-teak-finish-by-amberville-appleby-sheesham-wood-arm-ch-xel4kn.jpg" 
                        alt="Chair" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                     Wood Arm Chair
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
function Sofa(){
    return(
        <div className='sofa'>
            <table>
                <tr>
                    <td>
                        <img src="https://ii1.pepperfry.com/media/catalog/product/j/a/1250x625/jack-velvet-3-seater-sofa-in-grey-colour-jack-velvet-3-seater-sofa-in-grey-colour-ye4fd6.jpg" 
                        alt="Jack Velvet 3 Seater Sofa In Grey Colour" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                    Jack Velvet Sofa In Grey Colour
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
function Bed(){
    return(
        <div className='bed'>
            <table>
                <tr>
                    <td>
                        <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d896ddfe-f061-4330-be09-9638a5228628.__CR0,0,970,600_PT0_SX970_V1___.jpg" 
                        alt="Wooden Craftico Sheesham Wood King Size Double Bed " width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                    Wooden Bed</td>
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
function Table(){
    return(
        <div className='table'>
            <table>
                <tr>
                    <td>
                        <img src="https://sriganesanfurniture.com/wp-content/uploads/2018/12/19-1.jpg" 
                        alt="Coffee Table" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                    Coffee Table</td>
                </tr>
                <tr>
                    <td>
                        10000
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default function FurnitureCart() {
  return (
    <div className='Furniture'>
    <Chair/>
    <Sofa/>
    <Bed/>
    <Table/>
    </div>
  )
}
