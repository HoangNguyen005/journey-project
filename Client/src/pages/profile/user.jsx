// import { Link } from "react-router";
import { useContext, useState } from "react";
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext, url } from "../../context/storeContext";

import Button from "../../components/button";
function Profile() {

    const { user, setUser } = useContext(GlobalContext)
    const [newInfo, setNewInfo] = useState({
        avatar: 'https://cdn.galaxycine.vn/media/2023/3/27/hua-quang-han-1_1679888153909.jpg',
        // firstName: '',
        // lastName: '',
        // phoneNumber: '',
        // address: ''
    })

    const handleUpload = (e) => {
        setNewInfo({...newInfo, avatar: URL.createObjectURL(e.target.files[0])})
    }

    const handleOnChange = (e) => {
        setNewInfo({ ...newInfo, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${url}/user/edit`, {data: newInfo}, {
              
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`

                 }
            })
            // console.log(response)
            if (response.data.success) {
                toast.success(response.data.message)
                await setUser(response.data.data)
            }

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="">
            <ToastContainer />
            <header className="flex items-center gap-10 mb-20">
                <div className="relative">
                    <label htmlFor="avatar" className="absolute bottom-0 right-0 cursor-pointer hover:brightness-95 text-[12px] size-8 leading-8 text-center text-white bg-primary rounded-full z-10">  <FontAwesomeIcon className="" icon={faPen} /></label>
                    <img className="size-30 border border-border rounded-full object-cover relative" src={user.avatar || newInfo.avatar} alt="" />
                    <input onChange={handleUpload} hidden className="absolute" type="file" name="avatar" id="avatar" />
                </div>
                <div className='flex flex-col'>
                    <h1 className="text-xl font-normal text-text">{user.name}</h1>
                    <p className='text-text-gray text-base capitalize'>{user?.address}</p>
                </div>
            </header>
            <form action="">
                <div className="flex flex-col md:flex-row lg:gap-16 lg:mb-8">
                    <div className="flex-1 flex flex-col mb-4 lg:mb-0">
                        <label className="mb-1 text-text text-sm" htmlFor="first-name">First name</label>
                        <input onChange={(e) => handleOnChange(e)} required value={newInfo.firstName} className="border capitalize  border-border px-3 py-2 outline-none rounded-md" type="text" name="" id="firstName" />
                    </div>
                    <div className="flex-1 flex flex-col mb-4 lg:mb-0">
                        <label className="mb-1 text-text text-sm" htmlFor="last-name">Last name</label>
                        <input onChange={(e) => handleOnChange(e)} required value={newInfo.lastName} className="border  capitalize border-border px-3 py-2 outline-none rounded-md" type="text" name="" id="lastName" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row lg:gap-16">
                    <div className="flex-1 flex flex-col mb-4 lg:mb-0">
                        <label className="mb-1 text-text text-sm" htmlFor="Address">Địa chỉ</label>
                        <input onChange={(e) => handleOnChange(e)} required value={newInfo.address} className="border  capitalize border-border px-3 py-2 outline-none rounded-md" type="text" name="" id="address" />
                    </div>
                    <div className="flex-1 flex flex-col mb-4 lg:mb-0">
                        <label className="mb-1 text-text text-sm" htmlFor="phone-number">Số điện thoại</label>
                        <input onChange={(e) => handleOnChange(e)} required value={newInfo.phoneNumber} className="border capitalize border-border px-3 py-2 outline-none rounded-md" type="text" name="" id="phoneNumber" />
                    </div>
                </div>
                <Button onClick={(e) => handleSubmit(e)} primary className="text-base w-42 ml-auto rounded-sm mt-10 h-10" type="submit">Save</Button>
            </form>
        </div>
    );
}

export default Profile;