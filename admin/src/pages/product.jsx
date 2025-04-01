import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import noImg from '../assets/imgs/no_img.avif'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
function Product() {

    const { path, id } = useParams()
    console.log(path, id)
    const [images, setImages] = useState([])
    const [addImage, setAddImage] = useState(0)
    const [data, setData] = useState({
        name: '',
        des: '',
        brand: '',
        price: '',
    })

    useEffect(() => {
        if (path === 'edit') {
            axios.get('http://localhost:3000/api/product/edit/' + id)
                .then(res => {
                    console.log(res)
                    if (res.data.success == true) {
                        setData(res.data)

                    } else {
                        toast.error(res.message)
                    }
                })
                .catch(err => {
                    console.error(err)
                    toast.error('Đã xảy ra l��i, vui lòng thử lại!')
                })
        }
    }, [id, path])


    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/product/create', { ...data, images: [...images] })
            .then(res => {
                // console.log(res.data.success)
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    setData({
                        name: '',
                        des: '',
                        brand: '',
                        price: '',   
                        images: [],                  
                    })

                } else {
                    toast.error(res.data.message)
                }
            })
            .catch(err => {
                console.error(err)
                toast.error('Error! Cound"t insert product')
            })
    }


    // console.log(images)

    return (

        <>
            <ToastContainer />
            <form className="size-full p-6">
                <div className='flex flex-col mb-4'>
                    <label htmlFor="image">
                        {/* <img className='size-20 object-cover cursor-pointer' src={image ? URL.createObjectURL(image) : noImg} alt="" />
                        upload images */}
                        image
                    </label>
                    {/* <input className='border border-gray-300 py-1 px-3' onChange={(e) => setImage(e.target.files[0])} hidden type="file" name="" id="file" /> */}

                    <input className='border bg-white border-gray-300 py-1 px-3' onChange={(e) => setImages(images => [...images, e.target.value])} type="text" name="image" id="image" />

                    {Array.from({ length: addImage }).map((_, index) => (
                        <input className='border bg-white border-gray-300 py-1 px-3' onChange={(e) => setImages(images => [...images, e.target.value])} type="text" name={`image${index + 1}`} id={`image${index + 1}`} key={index} />
                    ))}
                    <button className='w-30 bg-gray-400' type='button' onClick={() => setAddImage(addImage + 1)}>Add image</button>
                </div>

                <div className='flex flex-col mb-4'>
                    <label htmlFor="name">Tên sản phẩm</label>
                    <input className='border bg-white border-gray-300 py-1 px-3' value={data.name} onChange={handleChange} type="text" name="name" id="name" />
                </div>

                <div className='flex  flex-col mb-4'>
                    <label htmlFor="des">Mô tả</label>
                    <textarea className=' border bg-white border-gray-300 py-1 px-3' value={data.des} onChange={handleChange} name="des" id="des"></textarea>
                </div>

                <div className='flex gap-10' >

                    <select value={data.brand} onChange={handleChange} name="brand" id="brand">
                        <option>Brand</option>

                        <option value="Nike">Nike</option>
                        <option value="Adidas">Adidas</option>
                        <option value="Vans">Vans</option>
                        <option value="Puma">Puma</option>
                        <option value="Jordan">Jordan</option>
                    </select>

                    <div className='flex flex-col mb-4'>
                        <label value={data.price} htmlFor="price">price</label>
                        <input className='border bg-white border-gray-300 py-1 px-3' onChange={handleChange} type="number" name="price" id="price" />
                    </div>
                </div>

                <button onClick={handleSubmit} className="text-white w-50 h-12 cursor-pointer bg-primary  px-4" type="submit">Save</button>

            </form>
        </>
    );
}

export default Product;