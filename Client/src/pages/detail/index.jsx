import { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ToastContainer, toast } from 'react-toastify';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Button from '../../components/button';
import Notifi from '../../components/notifi'
import { useParams } from 'react-router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../../context/storeContext';

function Detail() {
    const { slug } = useParams()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("")
    const [showNotifi, setShowNotifi] = useState(false)
    const { product, setProduct, addToCart, cartItems, setHistoryWatched, historyWatched } = useContext(GlobalContext)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/product/${slug}`)
            .then(res => {
                // console.log(res.data.data)
                setProduct(res.data.data)
                if (!historyWatched.some(item => item._id === res.data.data._id)) {
                    setHistoryWatched(pre => [...pre, res.data.data])
                }
            })
            .catch(err => {
                console.error(err)
            })

    }, [slug])





    const handleIncrease = () => {
        setQuantity(quantity => quantity + 1);
    }

    const handleReduce = () => {
        if (quantity == 1) return;
        setQuantity(quantity => quantity - 1);

    }


    const handleOnChange = e => {
        if (e.target.value == '') setQuantity(e.target.value)
        const integerRegex = /^[0-9 ]+$/;
        if (!integerRegex.test(e.target.value)) return;

        setQuantity(Number(e.target.value))
    }
    // console.log(cartItems)

    const handleAddToCart = useCallback(async (product) => {
        // console.log(user)
        if (size === '') {
            alert('Please select a size')
            return;
        }

        if (cartItems.some(item => item._id === product._id && item.size === size)) {
            toast.success('Thêm vào giỏ hàng thành công')

            return;
        }

        await addToCart({ ...product, size, quantity })
        toast.success('Thêm vào giỏ hàng thành công')
    }, [product, size])

    const handleSelectSize = (e) => {
        setSize(e.target.value)
    }
    // console.log(size)

    return (
        <div className="detail-page container mx-auto">
            <ToastContainer />
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="col-span-1">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {Object.keys(product) != 0 ? (product.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img className='object-cover select-none rounded-xl w-full h-[300px] md:h-[350px] lg:h-[460px]' src={image} />

                            </SwiperSlide>
                        ))) : null}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-6"

                    >
                        {Object.keys(product) != 0 ? (product.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img className='rounded-md ' src={image} />
                            </SwiperSlide>
                        ))) : null}
                    </Swiper>
                </div>
                <div className="col-span-1 px-2 md:py-6 md:px-10">
                    <h1 className='text-xl lg:text-3xl capitalize'>{product.name}</h1>
                    <div className='flex gap-8 items-center mt-2'>
                        <div className='flex items-center gap-1'>
                            <p>(0)</p>
                            <div className='flex gap-1 text-yellow-400 '>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <p>0 <span className='text-text-gray'>đánh giá</span></p>
                    </div>
                    <h1 className='text-4xl lg:text-5xl text-primary bold my-8'>${product.price}</h1>

                    <div className='flex items-center gap-4'>
                        <p className='flex-1 text-base text-text-gray leading-5'>An tâm mua sắm cùng Shopee</p>
                        <p className='flex-3'>Trả hàng miễn phí 15 ngày · Bảo hiểm Thời trang</p>

                    </div>

                    <div className='my-6 flex'>
                        <p className='flex-1 text-text-gray text-base mb-1'>Màu sắc</p>
                        <div className='flex flex-3 gap-2 flex-wrap'>
                            <label className='relative size-6 rounded-full block bg-black has-checked:border-primary hover:border-primary border-3 border-transparent  cursor-pointer'>
                                <input className='absolute opacity-0' type="radio" value="black" name="color" />

                            </label>
                            <label className='relative size-6 rounded-full block bg-red-400 has-checked:border-primary hover:border-primary border-3 border-transparent  cursor-pointer'>
                                <input className='absolute opacity-0' type="radio" value="red" name="color" />
                            </label>
                            <label className='relative size-6 rounded-full block bg-violet-300 has-checked:border-primary hover:border-primary border-3 border-transparent  cursor-pointer'>
                                <input className='absolute opacity-0' type="radio" value="violet" name="color" />

                            </label>

                            <label className='relative size-6 rounded-full block bg-white has-checked:border-primary hover:border-primary border-3 border-transparent  cursor-pointer'>
                                <input className='absolute opacity-0' type="radio" value="white" name="color" />
                            </label>

                        </div>
                    </div>
                    <div className='my-6 flex items-start'>
                        <p className='text-text-gray text-base mb-1 flex-1'>Size</p>
                        <div className='flex flex-3 gap-2 flex-wrap'>
                            <label className='relative has-checked:border-primary hover:border-primary active:scale-95 duration-[50ms] hover:text-primary has-checked:text-primary border border-border cursor-pointer'>
                                <input onChange={(e) => handleSelectSize(e)} className='absolute opacity-0' type="radio" value="38" name="size" />
                                <span className='text-base block px-7 py-2 select-none'>38</span>
                            </label>
                            <label className='relative has-checked:border-primary hover:border-primary active:scale-95 duration-[50ms] hover:text-primary has-checked:text-primary border border-border cursor-pointer'>
                                <input onChange={(e) => handleSelectSize(e)} className='absolute opacity-0' type="radio" value="39" name="size" />
                                <span className='text-base block px-7 py-2 select-none'>39</span>
                            </label>
                            <label className='relative has-checked:border-primary hover:border-primary active:scale-95 duration-[50ms] hover:text-primary has-checked:text-primary border border-border cursor-pointer'>
                                <input onChange={(e) => handleSelectSize(e)} className='absolute opacity-0' type="radio" value="40" name="size" />
                                <span className='text-base block px-7 py-2 select-none'>40</span>
                            </label>
                            <label className='relative has-checked:border-primary hover:border-primary active:scale-95 duration-[50ms] hover:text-primary has-checked:text-primary border border-border cursor-pointer'>
                                <input onChange={(e) => handleSelectSize(e)} className='absolute opacity-0' type="radio" value="41" name="size" />
                                <span className='text-base block px-7 py-2 select-none'>41</span>
                            </label>
                            <label className='relative has-checked:border-primary hover:border-primary active:scale-95 duration-[50ms] hover:text-primary has-checked:text-primary border border-border cursor-pointer'>
                                <input onChange={(e) => handleSelectSize(e)} className='absolute opacity-0' type="radio" value="42" name="size" />
                                <span className='text-base block px-7 py-2 select-none'>42</span>
                            </label>
                            <label className='relative has-checked:border-primary hover:border-primary active:scale-95 duration-[50ms] hover:text-primary has-checked:text-primary border border-border cursor-pointer'>
                                <input onChange={(e) => handleSelectSize(e)} className='absolute opacity-0' type="radio" value="43" name="size" />
                                <span className='text-base block px-7 py-2 select-none'>43</span>
                            </label>

                        </div>
                    </div>

                    <div className='flex items-center my-4'>
                        <p className='flex-1 text-text-gray text-base'>Số Lượng:</p>
                        <div className='flex-3 h-8 flex'>
                            <button className='border border-border w-7 h-full cursor-pointer' onClick={handleReduce}>-</button>
                            <input
                                onBlur={e => { e.target.value == '' ? setQuantity(1) : null }}
                                onChange={handleOnChange} className='border border-border w-14 text-primary text-center' type="text" value={quantity} />
                            <button className='border  border-border w-7 h-full cursor-pointer' onClick={handleIncrease}>+</button>
                        </div>
                    </div>
                    <footer className="footer w-full md:w-[70%] mt-10 flex items-center gap-4">
                        <Button
                            onClick={() => handleAddToCart(product)}
                            transparent className='flex-1 text-white h-12 rounded-sm'>
                            thêm vào giỏ hàng
                        </Button>
                        <Button primary className='flex-1 text-white h-12 rounded-sm'>mua ngay</Button>
                    </footer>
                </div>
            </div>

            <div className='bg-background rounded-sm mt-8 px-2 md:p-4'>
                <h1 className='bg-white text-lg uppercase leading-14 px-4'>chi tiết sản phẩm</h1>
                <div className='flex flex-col gap-3 p-4 text-sm'>
                    <div className='grid grid-cols-10'>
                        <p className='col-span-5 md:col-span-1 text-text-gray'>Loại</p>
                        <p className='col-span-5 md:col-span-9 capitalize'>Sneaker</p>
                    </div>
                    <div className='grid grid-cols-10'>
                        <p className='col-span-5 md:col-span-1 text-text-gray'>Xuất xứ</p>
                        <p className='col-span-5 md:col-span-9 capitalize'>Trung Quốc</p>
                    </div>
                    <div className='grid grid-cols-10'>
                        <p className='col-span-5 md:col-span-1 text-text-gray'>Kho</p>
                        <p className='col-span-5 md:col-span-9 capitalize'>67</p>
                    </div>

                    <div className='grid grid-cols-10'>
                        <p className='col-span-5 md:col-span-1 text-text-gray'>Gửi từ</p>
                        <p className='col-span-5 md:col-span-9 capitalize'>Hà Nội</p>
                    </div>
                </div>

                <h1 className='bg-white text-lg uppercase leading-14 px-4'>mô tả sản phẩm</h1>
                <div className='text-sm flex flex-col gap-2 p-4'>
                    <p>- Tất cả các sản phẩm đều được shop bảo hành</p>
                    <p>- Đối với sản phẩm lỗi/đơn hàng thiếu sản phẩm, quý khách vui lòng nhắn tin/gọi ngay cho shop trong vòng 3 ngày (kể từ ngày nhận đơn hàng)</p>
                    <p>- Nếu quá thời hạn 3 ngày kể từ ngày nhận đơn hàng, chế độ bảo hành của Shop sẽ hết.</p>
                    <p> + Quý khách vui lòng quay video khi mở hàng. Shop chỉ hỗ trợ bù hàng thiếu với đơn hàng có video quay lại quá trình khui hàng.</p>
                    <p>*** Mẹo cho người mua:</p>
                    <p>+ Khách hàng hãy tận dụng tối đa các mã miễn phí vận chuyển của Shopee và các mã giảm giá của shop </p>
                    <p>+ Theo dõi hành trình đơn đơn hàng nếu có vấn đề phát sinh về thời gian vận chuyển hay có vấn đề về sai số điện thoại đặt hàng, địa chỉ nhận hàng hãy báo lại shop để xử lý kịp thời</p>
                </div>
            </div>

            <div className='comment bg-background mt-2 rounded-sm'>
                <h1 className=' text-lg uppercase leading-14 px-4'>Đánh giá sản phẩm</h1>
                <p className='p-4 text-sm'>Sản phẩm chưa có đánh giá nào</p>
            </div>

            {showNotifi ? <Notifi /> : null}
        </div>
    );
}

export default Detail;
