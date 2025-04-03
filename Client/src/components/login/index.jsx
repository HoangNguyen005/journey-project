import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext, url } from '../../context/storeContext';
import axios from 'axios'
import Button from '../button'
function Login() {
    const [currState, setCurrState] = useState('login')
    const { setShowLogin, setUser, setToken } = useContext(GlobalContext)
    // setToken(localStorage.getItem('token'))
    // const [validateEmail, setValidateEmail] = useState(false)
    // const [validatePassword, setValidatePassword] = useState(false)
    // const [validateName, setValidateName] = useState(false)

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        setData({
            name: data.name.trim(),
            email: data.email.trim(),
            password: data.password.trim(),
        })


        try {
            if (currState === 'register') {
                if (data.email === '' || data.name === '' || data.password === '') {
                    toast.error('Please fill all fields')
                    return;
                }
                const response = await axios.post(`${url}/user/${currState}`, data, { withCredentials: true})
                // console.log(response)
                if (response.data.success) {
                    alert("Tạo tài khoản thành công")
                    // toast.success(response.data.message)
                    setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                    setCurrState('login')
                } else {
                    setData({
                        name: '',
                        email: '',
                        password: '',
                    })
                }
            } else {
                if (data.email === '' || data.password === '') {
                    toast.error('Please fill all fields')
                    return;
                }
                const response = await axios.post(`${url}/user/${currState}`, data)

                if (response.data.success) {
                    alert("Đăng nhập thành công")
                    // toast.success(response.data.message)
                    await setUser(response.data.user)
                    await setToken(response.data.token)
                    localStorage.setItem('token', response.data.token)
                    await setShowLogin(false)
                }
            }
        } catch (errors) {
            toast.error(errors.response.data.message)
            setData({
                ...data,
                email: ''
            })
            console.log(errors.response.data)
        }

    }



    return (
        <>
            <ToastContainer />
            <div className="fixed z-[999] top-0 left-0 right-0 bottom-0 bg-black/70">
                <div className='select-none hidden md:flex absolute top-[50%] left-[50%] translate-[-50%] w-[800px] h-[480px] rounded-xl overflow-hidden bg-white'>
                    <button className='absolute top-2 cursor-pointer text-black text-base font-bold right-2  z-50' onClick={() => setShowLogin(false)} type='button'>X</button>
                    <form style={{ 'transform': currState === 'login' ? 'translateX(0)' : 'translateX(100%)' }} onSubmit={(e) => handleSubmit(e)} className="w-[50%] order-1 transition-transform duration-700 ease-out bg-white p-10" action="">
                        <header className="title text-center text-black/70 text-2xl font-bold mb-8">{currState === 'login' ? 'Đăng nhập' : 'Đăng kí'}</header>
                        {currState != 'login' ? (
                            <div className="flex flex-col">
                                <label className='text-sm font-medium text-text-gray' htmlFor="name">Tên người dùng</label>
                                <input value={data.name} onChange={(e) => handleChange(e)} className="bg-background py-2 px-2 outline-none border-none mt-1 rounded-sm" type="name" name="name" placeholder="Tên người dùng" id="name" />
                                {/* {validateName ? <p className='text-red-600 text-sm'>Your name invalid</p> : null} */}
                            </div>
                        ) : null}
                        <div className="flex flex-col mt-4">
                            <label className='text-sm font-medium text-text-gray' htmlFor="email">Email</label>
                            <input value={data.email} onChange={(e) => handleChange(e)} className="bg-background  py-2 px-2 outline-none border-none mt-1 rounded-sm" type="email" name="email" placeholder="email" id="email" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className='text-sm font-medium text-text-gray' htmlFor="password">Mật khẩu</label>
                            <input value={data.password} onChange={(e) => handleChange(e)} className="bg-background py-2 px-2 outline-none border-none mt-1 rounded-sm" type="password" name="password" placeholder="Mật khẩu" id="password" />
                        </div>

                        <Button primary className='text-white w-full rounded-sm py-2 mt-8 !uppercase' type="submit">{currState === 'login' ? 'Đăng nhập' : 'Đăng kí'}</Button>



                    </form>
                    <div
                        style={{
                            'transform': currState === 'login' ? 'translateX(0)' : 'translateX(-100%)',
                            'border-top-left-radius': currState === 'login' ? '110px' : '0px',
                            'border-bottom-left-radius': currState === 'login' ? '110px' : '0px',
                            'border-top-right-radius': currState === 'login' ? '0px' : '110px',
                            'border-bottom-right-radius': currState === 'login' ? '0px' : '110px'
                        }}
                        className='bg-[#F76D1D] text-white rounded-l-[140px] transition-all flex justify-center items-center  duration-700 ease-out w-[50%] order-2'>
                        {currState === 'login' ? (
                            <div className='flex flex-col items-center'>
                                <h1 className='text-3xl font-bold mb-10'>Hello, Welcome</h1>
                                <p className='text-sm select-none'>Bạn chưa có tài khoản?</p>
                                <Button transparent onClick={() => setCurrState('register')} className=' cursor-pointer px-6 mt-2 py-1 rounded-sm !text-white !border-white'>Đăng kí ngay</Button>
                            </div>

                        ) : (
                            <div className='flex flex-col items-center'>
                                <h1 className='text-3xl font-bold mb-10'>Hello, Welcome</h1>

                                <p className='text-sm select-none'>Bạn đã có tài khoản?</p>
                                <Button transparent onClick={() => setCurrState('login')} className=' cursor-pointer px-6 mt-2 py-1 rounded-sm !text-white !border-white'>Đăng nhập ngay</Button>
                            </div>

                        )}
                    </div>
                </div>

                <div className='select-none flex md:hidden flex-col fixed top-0 bottom-0 left-0 right-0 rounded-xl overflow-hidden bg-white'>
                    <button className='absolute top-2 cursor-pointer text-black text-base font-bold right-2  z-50' onClick={() => setShowLogin(false)} type='button'>X</button>
                    <form onSubmit={(e) => handleSubmit(e)} className="w-full order-2 transition-transform duration-700 ease-out bg-white p-2" action="">
                        <header className="title text-center text-black/70 text-2xl font-bold mb-8">{currState === 'login' ? 'Đăng nhập' : 'Đăng kí'}</header>
                        {currState != 'login' ? (
                            <div className="flex flex-col">
                                <label className='text-sm font-medium text-text-gray' htmlFor="name">Tên người dùng</label>
                                <input value={data.name} onChange={(e) => handleChange(e)} className="bg-background py-2 px-2 outline-none border-none mt-1 rounded-sm" type="name" name="name" placeholder="Tên người dùng" id="name" />
                                {/* {validateName ? <p className='text-red-600 text-sm'>Your name invalid</p> : null} */}
                            </div>
                        ) : null}
                        <div className="flex flex-col mt-4">
                            <label className='text-sm font-medium text-text-gray' htmlFor="email">Email</label>
                            <input value={data.email} onChange={(e) => handleChange(e)} className="bg-background  py-2 px-2 outline-none border-none mt-1 rounded-sm" type="email" name="email" placeholder="email" id="email" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label className='text-sm font-medium text-text-gray' htmlFor="password">Mật khẩu</label>
                            <input value={data.password} onChange={(e) => handleChange(e)} className="bg-background py-2 px-2 outline-none border-none mt-1 rounded-sm" type="password" name="password" placeholder="Mật khẩu" id="password" />
                        </div>

                        <Button primary className='text-white w-full rounded-sm py-2 mt-8 !uppercase' type="submit">{currState === 'login' ? 'Đăng nhập' : 'Đăng kí'}</Button>



                    </form>
                    <div

                        className='bg-[#F76D1D] py-14 rounded-b-[80px] text-white transition-all flex justify-center items-center  duration-700 ease-out w-full order-1'>
                        {currState === 'login' ? (
                            <div className='flex flex-col items-center'>
                                <h1 className='text-3xl font-bold mb-10'>Hello, Welcome</h1>
                                <p className='text-sm select-none'>Bạn chưa có tài khoản?</p>
                                <Button transparent onClick={() => setCurrState('register')} className=' cursor-pointer px-6 mt-2 py-1 rounded-sm !text-white !border-white'>Đăng kí ngay</Button>
                            </div>

                        ) : (
                            <div className='flex flex-col items-center'>
                                <h1 className='text-3xl font-bold mb-10'>Hello, Welcome</h1>

                                <p className='text-sm select-none'>Bạn đã có tài khoản?</p>
                                <Button transparent onClick={() => setCurrState('login')} className=' cursor-pointer px-6 mt-2 py-1 rounded-sm !text-white !border-white'>Đăng nhập ngay</Button>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </>

    );
}

export default Login;