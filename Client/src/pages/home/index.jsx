import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'swiper/css';
import './home.css'

import ads from '../../assets/imgs/ads.jpg';
import ads1 from '../../assets/imgs/ads1.jpg';

// import required modules
import 'swiper/css/free-mode';
import { Navigation, FreeMode } from 'swiper/modules';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Components
import Hero from "../../components/hero";
import ProductTemplate2 from "../../components/productTemplate2";
import product from '../../assets/imgs/product3.png'
import { GlobalContext, url } from "../../context/storeContext";
function HomePage() {
    const [products, setProducts] = useState([])
    const { historyWatched, setHistoryWatched } = useContext(GlobalContext)
    // console.log(historyWatched)
    useEffect(() => {
        axios.get(`${url}/product?limit=10`)
            .then(res => {
                // console.log(res.data)
                setProducts(res.data.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <main className="home-page relative">
                <Hero />

                {
                    historyWatched.length > 0 ? (
                        <div className="container relative mx-auto mt-30">
                            <div className="flex justify-between">
                                <div className="hidden md:block">
                                    <button className="swiper-button-prev !size-10 border border-primary rounded-full !-top-0 left-0 after:hidden duration-75 active:scale-95">
                                        <FontAwesomeIcon className="text-primary text-sm" icon={faAngleLeft} />
                                    </button>
                                    <button className="swiper-button-next !size-10 border border-primary rounded-full !-top-0 !left-16 after:hidden duration-75 active:scale-95">
                                        <FontAwesomeIcon className="text-primary text-sm" icon={faAngleRight} />
                                    </button>
                                </div>
                                <div className="mb-5">
                                    <div className="flex items-center gap-2 ">
                                        <h1 className="capitalize text-3xl select-none ">Lịch sử xem</h1>
                                        <span className="block w-46 h-[2px] select-none bg-primary"></span>
                                    </div>
                                    <p onClick={() => {
                                        localStorage.clear()
                                        setHistoryWatched([])
                                    }} className="text-sm hover:text-primary mt-4 cursor-pointer select-none">Xóa lịch sử</p>
                                </div>
                            </div>
                            <Swiper

                                navigation={{
                                    clickable: true,
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}

                                modules={[Navigation, FreeMode]}
                                slidesPerView={2}
                                spaceBetween={10}

                                breakpoints={{

                                    // when window width is >= 580px
                                    580: {
                                        slidesPerView: 3,
                                        spaceBetween: 14
                                    },
                                    // when window width is >= 940px
                                    940: {
                                        slidesPerView: 4,
                                        spaceBetween: 20
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                        spaceBetween: 20
                                    }
                                }
                                }
                            >
                                {historyWatched.map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <ProductTemplate2
                                            product={product}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    ) : (
                        null
                    )
                }

                <div className='main-content container mx-auto mt-32'>
                    <div className="text-center my-8">
                        <h1 className="text-4xl mb-2 font-bold text-gray ">Journey</h1>
                        <p className="slogan mb-5 text-xl text-primary font-(family-name:--font-dancing-script) italic">The legend of the steps</p>
                        <p className="md:max-w-[70%] w-full mx-auto italic ">"Journey – hành trình vạn dặm khởi nguồn từ một bước chân. Mỗi đôi giày mang trong mình không chỉ giá trị, mà còn là dấu ấn của những hành trình. Chúng tôi trân trọng từng đường nét, tuyển chọn tinh tế để mang đến sự bền vững, thoải mái và phong thái riêng biệt. Hãy để Journey cùng bạn viết nên câu chuyện của những bước đi."</p>
                    </div>
                    <div className="flex justify-between">
                    </div>
                    <div className="my-40 relative">
                        <div className="flex justify-between">
                            <div className="hidden md:block">
                                <button className="swiper-button-prev !size-10 border border-primary rounded-full !-top-0 left-0 after:hidden duration-75 active:scale-95">
                                    <FontAwesomeIcon className="text-primary text-sm" icon={faAngleLeft} />
                                </button>
                                <button className="swiper-button-next !size-10 border border-primary rounded-full !-top-0 !left-16 after:hidden duration-75 active:scale-95">
                                    <FontAwesomeIcon className="text-primary text-sm" icon={faAngleRight} />
                                </button>
                            </div>
                            <div className="flex items-center gap-2 mb-5">
                                <h1 className="capitalize text-3xl select-none ">trending <span className="text-primary">collection</span></h1>
                                <span className="block w-46 h-[2px] select-none bg-primary"></span>
                            </div>
                        </div>
                        <Swiper

                            navigation={{
                                clickable: true,
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}

                            modules={[Navigation, FreeMode]}
                            slidesPerView={2}
                            spaceBetween={10}

                            breakpoints={{

                                // when window width is >= 580px
                                580: {
                                    slidesPerView: 3,
                                    spaceBetween: 14
                                },
                                // when window width is >= 940px
                                940: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20
                                }
                            }
                            }
                        >
                            {products.map(product => (
                                <SwiperSlide key={product._id}>
                                    <ProductTemplate2
                                        product={product}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 my-40 items-center" >
                        <div className="col-span-1 order-2 flex gap-6 h-[500px]">
                            <div className=" w-[50%] h-[450px] self-end"> <img src={ads1} className="w-full h-full object-contain" alt="" /></div>
                            <div className=" w-[50%] h-[450px] self-start"> <img src={ads} className="w-full h-full object-contain " alt="" /></div>
                        </div>
                        <div className="col-span-1 order-1">
                            <h1 className="text-3xl mb-6">Lý Do Chọn Chúng Tôi - Journey</h1>
                            <p>Tại Journey, chúng tôi không chỉ bán giày – chúng tôi mang đến trải nghiệm hoàn hảo cho những bước đi của bạn. Với sứ mệnh giúp bạn tự tin thể hiện phong cách và chinh phục mọi hành trình, chúng tôi cam kết mang đến những sản phẩm chất lượng nhất với dịch vụ tận tâm.</p>

                            <ul role="list" className="list-disc my-6 marker:text-primary marker:text-2xl">
                                <li className="ml-12">Chất Lượng Đỉnh Cao</li>
                                <li className="ml-12">Mẫu Mã Đa Dạng</li>
                                <li className="ml-12">Dịch Vụ Nhanh Chóng & Tận Tâm</li>
                                <li className="ml-12">Ưu Đãi Hấp Dẫn</li>
                            </ul>
                            <div className="flex mt-6 items-center">
                                <button className="size-8 mr-6 bg-primary text-center leading-8 text-base text-white cursor-pointer">+</button>
                                <p className="text-base">Explore More</p>
                                <span className="block ml-4 w-26 h-[2px] bg-primary" />
                            </div>
                        </div>
                    </div>

                    <div className="banner relative grid grid-cols-1 lg:grid-cols-2 items-center p-10 rounded-2xl gap-2 overflow-hidden shadow bg-[#F6F6F6]" >
                        <div className="col-span-1 h-60 flex overflow-hidden items-center">
                            <img className="object-contain size-full  m-auto " src={product} alt="" />
                        </div>
                        <div className="col-span-1">
                            <h1 className="title text-5xl text-gray leading-13 font-bold capitalize">
                                Get your shoes
                            </h1>
                            <h1 className="title text-5xl text-gray leading-13 font-bold capitalize">
                                now on <span className="text-primary">15%</span> discount
                            </h1>
                            <p className="text-sm mt-6 leading-5 max-w-[76%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae tempora, officia id deleniti optio eos fugiat debitis consequatur. Porro at vero culpa!</p>
                            <div className="flex mt-6 items-center">
                                <button className="size-8 mr-6 bg-primary text-center leading-8 text-base text-white cursor-pointer">+</button>
                                <p className="text-base">Buy Now</p>
                                <span className="block ml-4 w-26 h-[2px] bg-primary" />
                            </div>
                        </div>
                    </div>
                </div >
            </main>
        </>
    );
}

export default HomePage;

