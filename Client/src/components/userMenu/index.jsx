import axios from "axios";
import { useContext, useEffect } from "react";
import { GlobalContext, url } from "../../context/storeContext";
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Link } from "react-router";
import config from "../../configs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

function UserMenu() {

    const { user, setUser, setToken, setCartItems, setHistoryWatched, setShowNavBar } = useContext(GlobalContext)

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axios.get(`${url}/user/get`, {

                    headers: {
                        //    token: `${localStorage.getItem('token')}`,
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

                // console.log(response)

                await setUser(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchApi()

    }, [setUser])

    const handleLogout = async () => {
        await setToken("");
        await setUser({});
        await setCartItems([]);
        await setHistoryWatched([])
        await localStorage.removeItem("token")
        await localStorage.removeItem("history")
    }

    return (

        <div className="">
            <Tippy
                // visible
                interactive
                placement="bottom-end"
                // duration={[5000]}
                render={attrs => (
                    <div className="box shadow z-50 py-4 bg-white rounded-sm" tabIndex="-1" {...attrs}>
                        <ul>
                            <li className="cursor-pointer px-4 py-1 mb-2 border-b border-border hover:bg-gray-200">
                                <Link
                                    onClick={() => setShowNavBar(false)}
                                    to={config.routes.profile}>
                                    <FontAwesomeIcon className="text-base text-text-gray mr-2" icon={faUser} />
                                    Tài khoản và cài đặt
                                </Link>
                            </li>
                            <li onClick={handleLogout} className="cursor-pointer px-4 py-1  hover:bg-gray-200">
                                <FontAwesomeIcon className="text-base text-text-gray mr-2" icon={faRightFromBracket} />
                                Đăng xuất</li>
                        </ul>
                    </div>
                )}
            >
                <div className="flex items-center gap-2 cursor-pointer">
                    <img className="size-8 rounded-full object-cover" src={user.avatar || 'https://cdn.galaxycine.vn/media/2023/3/27/hua-quang-han-1_1679888153909.jpg'} alt="" />
                    <h2 className="text-black">{user.name}</h2></div>
            </Tippy>
        </div>
    );
}

export default UserMenu;
