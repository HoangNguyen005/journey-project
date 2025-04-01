import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import noImg from '../assets/imgs/no_img.avif'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
function Edit() {

    const { id } = useParams()

    const [images, setImages] = useState([])
    const [addImage, setAddImage] = useState(0)
    const [data, setData] = useState({

    })

    useEffect(() => {

        axios.get('http://localhost:3000/api/product/edit/' + id)
            .then(res => {
                console.log(res.data)
                if (res.data.success == true) {
                    setData(res.data.data)
                    setImages(res.data.data.images)

                } else {
                    toast.error(res.message)
                }
            })
            .catch(err => {
                console.error(err)
                toast.error('Đã xảy ra loi, vui lòng thử lại!')
            })
    }, [id])



    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(images)

        axios.put('http://localhost:3000/api/product/put/' + id, { ...data, images })
            .then(res => {
                console.log(res.data)
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    console.log(res.data)
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch(err => {
                console.error(err)
                toast.error('Đã xảy ra l��i, vui lòng thử lại!')
            })
    }


    // console.log(images)

    return (

        <>
            <ToastContainer />
            <form className="size-full">
                <div className='flex flex-col mb-4'>
                    <label htmlFor="image">
                        {/* <img className='size-20 object-cover cursor-pointer' src={image ? URL.createObjectURL(image) : noImg} alt="" />
                        upload images */}
                        image
                    </label>
                    {/* <input className='border border-gray-300 py-1 px-3' onChange={(e) => setImage(e.target.files[0])} hidden type="file" name="" id="file" /> */}

                    {
                        images.map((image, index) => (
                            <div key={index}  >
                                <input className='border bg-white border-gray-300 py-1 px-3' value={image} type="text" name="image" id="image" />
                                <button type='button' onClick={() => {

                                    const newImages = [...images]
                                    newImages.splice(index, 1);
                                    setImages([...newImages]);
                                }}>X</button>
                            </div>
                        ))
                    }

                    {
                        Array.from({ length: addImage }).map((_, index) => (
                            <div key={index}  >
                                <input className='border bg-white border-gray-300 py-1 px-3' onChange={(e) => setImages([...images, e.target.value])} type="text" name="image" id="image" />
                                <button type="button" onClick={() => {
                                    const newImages = [...images]
                                    newImages.splice(index, 1);
                                    setImages(newImages);
                                }}>X</button>
                            </div>
                        )) 
                    }

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
                        <label htmlFor="price">price</label>
                        <input value={data.price} className='border bg-white border-gray-300 py-1 px-3' onChange={handleChange} type="number" name="price" id="price" />
                    </div>
                </div>

                <button onClick={handleSubmit} className="text-white w-50 h-12 cursor-pointer bg-primary  px-4" type="submit">Save</button>

            </form>
        </>
    );
}

export default Edit;