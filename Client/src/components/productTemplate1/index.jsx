// import { useEffect } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router';
import config from '../../configs';
import heartFill from '../../assets/imgs/icons/heart-fill.png'
import heartEmpty from '../../assets/imgs/icons/heart-empty.png'
import { useState } from 'react';
import { toTop } from '../../helper';

function ProductTemplate1({name, price, image, slug, brand}) {
    // const [data, setData] = useState([])
    const [isLike, setIsLike] = useState(false)
    
    return (
        <div className="product relative col-span-1 overflow-hidden duration-100 hover:-translate-y-1.5">
           
            <div className="img w-full relative cursor-pointer">
                {/* <div className='absolute top-[50%] left-[50%] translate-[-50%] rounded-full size-40 bg-red-300'/> */}
               <Link onClick={toTop}  to={`${config.routes.product}/${slug}`}> <img className='w-full h-54 z-20 object-cover origin-bottom-left duration-500 linear rounded-2xl ' src={image} alt="" /></Link>
            </div>
            <div className='py-4'>
                <div className="flex justify-between ">
                    <h3 className='price text-xl font-bold'>${price}</h3>
                     {/* <div className='absolute top-2 left-2 bg-primary rounded-full size-7 p-1 cursor-pointer' onClick={()=>{setIsLike(!isLike); if(!isLike) alert("Sản phẩm đã được thêm vào mục yêu thích")}}>
                        <img className='object-contain' src={isLike?heartFill:heartEmpty} alt="heart" />
                     </div> */}    
                </div>        
             <p className='text-text-gray my-1  text-base'>{brand}</p>
                 <div className='flex justify-between items-center'>
                        <h2 className='text-gray text-base capitalize truncate'>{name}</h2>
                        <button className="min-w-8 min-h-8 bg-primary text-center leading-8 text-base text-white cursor-pointer">+</button>              
                 </div>
            </div>
        </div>
    );
}

ProductTemplate1.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
}

export default ProductTemplate1;
