import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalContext } from '../../context/storeContext';
import axios from 'axios'
import Button from '../button'
function Login() {
    const [currState, setCurrState] = useState('login')
    const { setShowLogin, setUser, token, setToken } = useContext(GlobalContext)
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
                const response = await axios.post(`http://localhost:3000/api/user/${currState}`, data)
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
                const response = await axios.post(`http://localhost:3000/api/user/${currState}`, data)
             
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
                <form onSubmit={(e)=>handleSubmit(e)} className="w-90 p-6 absolute top-[50%] left-[50%] translate-[-50%] bg-white rounded-sm" action="">
                    <button onClick={() => setShowLogin(false)} type='button'>X</button>
                    <header className="title text-center text-lg">{currState === 'login' ? 'Login' : 'Singin'}</header>
                    {currState != 'login' ? (
                        <div className="flex flex-col">
                            <label htmlFor="name">*Name</label>
                            <input value={data.name} onChange={(e) => handleChange(e)} className="border py-1 px-2 rounded-sm border-black" type="name" name="name" placeholder="name" id="name" />
                            {/* {validateName ? <p className='text-red-600 text-sm'>Your name invalid</p> : null} */}
                        </div>
                    ) : null}
                    <div className="flex flex-col mt-4">
                        <label htmlFor="email">*Email</label>
                        <input value={data.email} onChange={(e) => handleChange(e)} className="border py-1 px-2 rounded-sm border-black" type="email" name="email" placeholder="email" id="email" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="password">*Password</label>
                        <input value={data.password} onChange={(e) => handleChange(e)} className="border py-1 px-2 rounded-sm border-black" type="password" name="password" placeholder="password" id="password" />
                    </div>

                    <Button primary className='text-white w-full my-4 rounded-sm py-2' type="submit">{currState === 'login' ? 'Login' : 'Singin'}</Button>


                    {currState === 'login' ? (
                        <p className='text-sm select-none'>You haven't an account? <span onClick={() => setCurrState('register')} className='underline cursor-pointer text-primary'>Singin now</span></p>

                    ) : (
                        <p className='text-sm select-none'>You have an account? <span onClick={() => setCurrState('login')} className='underline cursor-pointer text-primary'>Login now</span></p>

                    )}
                </form>
            </div>
        </>

    );
}

export default Login;