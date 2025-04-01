import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from '../../configs';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { toTop } from '../../helper';

function ProductTemplate2({ name, price, image, slug, brand }) {
    return (
        <div className='py-4'>
            <div className='w-full h-[70px]'></div>
            <div className='lg:p-4 p-2 rounded-lg !pt-40  bg-white shadow border border-border relative duration-200 hover:-translate-y-2 '>
                <Link onClick={toTop} to={`${config.routes.product}/${slug}`}>
                    <img className='absolute -top-16 rounded-2xl  left-[50%] translate-x-[-50%] w-[90%] h-[80%] object-cover' src={image} alt="" />
                </Link>
                <div className="flex items-center justify-between">
                    <Link onClick={toTop} to={`${config.routes.product}/${slug}`}>
                        <h1 className="text-base capitalize truncate lg:max-w-38 max-w-32">{name}</h1>
                    </Link>
                    <div className="flex items-center">
                        <FontAwesomeIcon className='text-yellow-300 text-base' icon={faStar} />
                        <p>(4.5)</p>
                    </div>
                </div>

                <p className="brand text-gray-400 my-1 capitalize">{brand}</p>

                <div className="footer flex justify-between">
                    <p className="price font-bold text-lg">${price}</p>
                    <button className="size-8 bg-primary text-center leading-8 text-base text-white cursor-pointer">+</button>
                </div>
            </div>
            <div className='w-full h-[10px]'></div>

        </div>
    );
}

ProductTemplate2.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
}

export default ProductTemplate2;
