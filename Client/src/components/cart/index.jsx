import { useContext} from 'react';

import Tippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../../context/storeContext';
import { Link } from 'react-router';
import config from '../../configs';
import emptyCart from '../../assets/imgs/empty-cart.jpg'
import Button from '../button';
function Cart() {
 
    const { cartItems , setShowNavBar} = useContext(GlobalContext)

    return (

        <div>
            <Tippy
                // visible
                interactive
                offset={[4, 12]}
                placement="bottom-end"

                render={attrs => (
                    <div className="box shadow border border-border z-50 w-80 py-4 bg-white rounded-sm" tabIndex="-1" {...attrs}>
                        {cartItems.length === 0 ? (
                            <div>
                                <img className="w-full h-60 object-cover" src={emptyCart} alt="empty cart" />
                                <h1 className='text-center mt-4'>Không có sản phẩm nào trong giỏ hàng</h1>
                            </div>
                        ) : (
                            <div className='flex flex-col'>
                                <h1 className="title font-bold text-xl text-text text-center mb-6">Giỏ hàng</h1>
                                <ul className='max-h-96 overflow-auto no-scrollbar'>
                                    {cartItems.map((item, index) => (
                                        <li key={index} className='flex mb-2 justify-between items-center px-4'>
                                            <Link to={`${config.routes.product}/${item.slug}`} className='flex gap-4 items-center'>
                                                <img className='size-15 rounded-sm' src={item.images[0]} alt="" />
                                                <h1 className='truncate max-w-42'>{item.name}</h1>
                                            </Link>
                                            <p>{item.price}$</p>
                                        </li>
                                    ))}
                                </ul>
                                <Button onClick={()=>setShowNavBar(false)} to="/cart" primary className="rounded-sm py-2 px-4 text-sm self-end m-4">Xem giỏ hàng</Button>
                            </div>
                        )}
                    </div>
                )}
            >
                <div className="relative mt-20 lg:mt-0 cursor-pointer">
                    <span className="absolute size-5 leading-5 text-sm  rounded-full text-center bg-primary text-white -top-2 -right-1">{cartItems.length}</span>
                    <FontAwesomeIcon className="text-2xl mx-2 text-gray-400 cursor-pointer" icon={faBagShopping} />
                </div>
            </Tippy>
        </div>
    );
}

export default Cart;
