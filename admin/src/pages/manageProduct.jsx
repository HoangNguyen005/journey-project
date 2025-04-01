import { useEffect, useState } from "react";
import {Link} from 'react-router'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


function ManageProduct() {

    const [products, setProducts] = useState([])

    useEffect(() => {


        axios.get(`http://localhost:3000/api/product`)
            .then(res => {
                if(res.data.success) {
                    setProducts(res.data.data)
                }
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })


    }, [])

    const handleRemove = async (id) => {
        // console.log(id)
        const result = confirm('Are you sure you want to remove this item?')
        if(result) {
            axios.delete(`http://localhost:3000/api/product/remove/${id}`)
                .then(res => {
                    if(res.data.success) {
                        setProducts(res.data.data)
                        toast.success(res.data.message)
                    } else {
                        toast.error(res.data.message)
                    }
                    console.log(res.data)
                })
                .catch(err => {
                    toast.error(err.data.message)
    
                })
        } else {
            console.log('Remove cancelled')
        }



       
    }




    const handleChange = (e) => {
        // console.log(e.target.checked)
        // if(e.target.checked) {

        // }
    }



    return (
       <>
            <ToastContainer />
            <table className="w-full rounded-md">
                
                <thead className="text-center sticky top-0 z-50 ">
                    <tr className="table-header bg-white">
                        <th className="w-18 p-4">#</th>
                        <th className="text-start  w-[35%]">Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Image</th>
                        <th><button>Edit</button></th>
                        <th><button >remove</button></th>
                        <th className="w-16"></th>
    
                    </tr>
                </thead>
                <tbody className="text-center ">
    
                    {products.map((product, index) => (
                        <tr key={product._id}>
                            <td className="max-h-12 min-h-12">{index + 1}</td>
                            <td className="text-start">{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.brand}</td>
                            <td className="flex"><img className="size-12 mx-auto" src={product.images[0]} alt="Shoe 1" /></td>
                            <td>
                                <Link to={`/product/edit/${product._id}`} className="cursor-pointer "><FontAwesomeIcon icon={faPen} /></Link>
                            </td>
                            <td>
                                <button onClick={() => handleRemove(product._id)} className="text-red-600 hover:text-red-500 text-xl cursor-pointer"><FontAwesomeIcon icon={faTrash} /></button>
                            </td>
                            <td className=""><input onChange={handleChange} className="cursor-pointer" type="checkbox" name="" id="" /></td>
                        </tr>
    
                    ))}
    
                </tbody>
            </table>
       </>
    );
}

export default ManageProduct;