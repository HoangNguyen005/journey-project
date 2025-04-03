import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const GlobalContext = createContext()

export const url = "https://journey-project-backend-86xu.onrender.com/api"


function GlobalProvider({ children }) {

    const [showLogin, setShowLogin] = useState(false)
    const [user, setUser] = useState({})
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [product, setProduct] = useState({})
    const [cartItems, setCartItems] = useState([])
    const [showNotifi, setShowNotifi] = useState(false)
    const [historyWatched, setHistoryWatched] = useState([])

    // Handle add to cart
    const addToCart = useCallback(async (item) => {
        // console.log(item)
        // console.log(cartItems)
        // Kiểm tra xem item đã có trong gi�� hàng chưa
        if (cartItems.some(cartItem => cartItem.size == item.size)) {
          
            alert("Sản phẩm đã có trong giỏ hàng")
            return;
        }
        axios.post(`${url}/cart/add`, { item }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            withCredentials: true // Nếu backend yêu cầu
        })
            .then(res => {
                if (res.data.success) {
                    setShowNotifi(true)
                    setTimeout(() => {
                        setShowNotifi(false)
                    }, 4000)

                }
            })
            .catch(err => {
                console.log(err)
            })
        setCartItems(prevCartItems => [...prevCartItems, item])
    }, [])


    // Get cart from database
    useEffect(() => {
        const fetch = async () => {
            try {

                const res = await axios.get(`${url}/cart/get`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    },
                    withCredentials: true // Nếu backend yêu cầu
                })
                setCartItems(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetch()
    }, [user])

    useEffect(() => {
        const historyItems = JSON.parse(localStorage.getItem('history'))
        if(!historyItems)
            return;
        setHistoryWatched(historyItems)
    }, [])


    useEffect(() => {
        if (historyWatched.length == 0) return
        const historyWatchedFn = (historyWatched) => {
            const newItems = JSON.stringify(historyWatched)
            localStorage.setItem('history', newItems)
        }
        historyWatchedFn(historyWatched)
    }, [historyWatched])

    // console.log(historyWatched)


    const contextValues = {
        showLogin,
        setShowLogin,
        user,
        setUser,
        token,
        setToken,
        product,
        setProduct,
        cartItems,
        setCartItems,
        showNotifi,
        setShowNotifi,
        addToCart,
        setHistoryWatched,
        historyWatched
    }




    return (
        <GlobalContext.Provider value={contextValues}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext }
export default GlobalProvider;
