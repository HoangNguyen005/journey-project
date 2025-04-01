import { useContext } from "react";
import { GlobalContext } from "../../context/storeContext";
import Button from "../../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

function Cart() {
    const { cartItems } = useContext(GlobalContext)
    console.log(cartItems)

    // const handleRemove = async (id) => {
    //     axios.delete('http://localhost:3000/api/cart/remove/'+id, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })
    // }
    return (
        <div className="cart container mx-auto">
            <header className="mt-20">
                <h1 className="text-start text-3xl font-bold">Cart items</h1>
            </header>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 lg:col-span-2 ">
                    <table className="border-collapse w-full">
                        <thead className=" text-start">
                            <tr className=" text-gray h-16  " >

                                <th className="text-start w-[55%]">Product</th>
                                <th className="text-center">Màu sắc</th>
                                <th className="text-center">Size</th>
                                <th className="text-center">Số lượng</th>
                                <th className="text-center">Giá</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {(cartItems.length > 0 && cartItems) ? (
                                cartItems.map((item, index) => (
                                    <tr key={index} className="border-b border-border h-14">

                                        <td className="flex gap-4 py-6">
                                            <div className="min-w-32 h-26 rounded-md border border-border overflow-hidden">

                                                <img className="object-contain size-full" src={item.images[0]} alt="" />
                                            </div>
                                            {item.name}
                                        </td>
                                        <td className="text-center py-6">Red</td>
                                        <td className="text-center py-6">{item.size}</td>
                                        <td className="text-center py-6"><input className="w-14 text-center" type="number" value={item.quantity} name="" id="" /></td>
                                        <td className="text-center py-6">${item.price}</td>
                                        <td className="text-center py-6">
                                            <FontAwesomeIcon  className="cursor-pointer text-red-700 hover:text-red-500" icon={faTrash} />
                                        </td>
                                    </tr>
                                ))

                            ) : null}

                        </tbody>
                    </table>
                </div>
                <div className="col-span-3 lg:col-span-1">
                  <div  className=" bg-background p-4 pb-6">
                        <h1 className="text-2xl h-10 border-b border-black">Summary</h1>
    
                        <div className=" mt-4 flex justify-between text-black">
                            <p>Tổng sản phẩm:</p>
                            <p className=" text-base font-bold">    ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
                        </div>
                        <div className=" mt-4 flex justify-between text-black">
                            <p>Phí vận chuyển:</p>
                            <p className=" text-base font-bold">$0</p>
                        </div>
                        <div className=" mt-4 flex justify-between text-black">
                            <p>Tổng cộng:</p>
                            <p className=" text-black text-base font-bold">{cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
                        </div>
                        <Button primary className="w-full text-white h-12 rounded-sm px-4 mt-6" type="submit">Thanh toán ngay</Button>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;