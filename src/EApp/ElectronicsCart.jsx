import React from 'react';

function Electronics1(){
    return(
        <div className='chair'>
            <table>
                <tr>
                    <td>
                        <img src="https://static-assets.business.amazon.com/assets/in/7th-feb/Resize_Cooking_626_417_0202.jpg.transform/width-2216/image.jpg" 
                        alt="Mixcy" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                    Grainers
                    </td>
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
function Electronics2(){
    return(
        <div className='sofa'>
            <table>
                <tr>
                    <td>
                        <img src="https://d1pjg4o0tbonat.cloudfront.net/content/dam/midea-aem/in/refrigerators/multi-door-refrigerators/midea-544-l-frost-free-french-door-bottom-mount-refrigerator-glass-door-finish-mdrm648fgg22ind/gallery3.jpg/jcr:content/renditions/cq5dam.web.5000.5000.jpeg" 
                        alt="fridge" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                    French Door Refrigerator
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
function Electronics3(){
    return(
        <div className='bed'>
            <table>
                <tr>
                    <td>
                        <img src="https://d1pjg4o0tbonat.cloudfront.net/content/dam/midea-aem/in/small-appliances/oven-toaster-grillers/midea-35-litre-meo-35bz21-oven-toaster-grill-otg-silver/35L%20OTG%20Front%20Image.jpg/jcr:content/renditions/cq5dam.web.5000.5000.jpeg" 
                        alt="MicroOven" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                       Micro Oven 
                    </td>
                </tr>
                <tr>
                    <td>
                        4000
                    </td>
                </tr>
            </table>
        </div>
    )
}
function Electronics4(){
    return(
        <div className='table'>
            <table>
                <tr>
                    <td>
                        <img src="https://www.whiteteak.com/media/catalog/product/c/f/cf8-10002_1_.jpg?width=680&height=680&canvas=680,680&optimize=medium&fit=bounds" 
                        alt="Fan" width='150px' height='150px'/>
                    </td>
                </tr>
                <tr>
                    <td>
                     Ceiling Fan
                    </td>
                </tr>
                <tr>
                    <td>
                        3000
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default function ElectronicsCart() {
  return (
    <div className='Furniture'>
    <Electronics1/>
    <Electronics2/>
    <Electronics3/>
    <Electronics4/>
    </div>
  )
}
