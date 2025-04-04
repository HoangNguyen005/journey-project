import Header from "../../components/header";
import Footer from "../../components/footer";
import { useContext } from "react";
import { GlobalContext } from "../../context/storeContext";
import Login from "../../components/login";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames";

function ProfileLayout({ children }) {
    const { showLogin, setToken, setUser, setCartItems , setHistoryWatched} = useContext(GlobalContext)
    // console.log(login)
    return (
        <div className="">
            {showLogin ? <Login /> : null}

            <Header />
            <div className="container mx-auto ">
                <div className="grid grid-cols-5 gap-10">
                    <div className="col-span-5 lg:col-span-1 border-r lg:min-h-[600px] flex flex-col justify-between border-border">


                        <ul className="mt-20 lg:block flex gap-6">
                            <li>
                                <NavLink className={({ isActive }) => classNames("py-1 lg:pr-0 pr-4 hover:text-black block text-text-gray relative before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-1 before:rounded-bl-full before:rounded-tl-full before:bg-transparent", { "before:!bg-primary text-black": isActive })} to="/profile/user">Thông tin tài khoản</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => classNames("py-1 lg:pr-0 pr-4 hover:text-black block text-text-gray relative before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-1 before:rounded-bl-full before:rounded-tl-full before:bg-transparent", { "before:!bg-primary text-black": isActive })} to="/profile/like" >Yêu thích</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => classNames("py-1 lg:pr-0 pr-4 hover:text-black block text-text-gray relative before:content-[''] before:absolute before:right-0 before:top-0 before:h-full before:w-1 before:rounded-bl-full before:rounded-tl-full before:bg-transparent", { "before:!bg-primary text-black": isActive })} to="/profile/setting">Cài đặt</NavLink>
                            </li>
                        </ul>

                        <button type="button" onClick={() => {
                            if (confirm("Bạn chắc chắn muốn đăng xuất")) {
                                setToken("");
                                setUser({});
                                setCartItems([]);
                                setHistoryWatched([])
                                localStorage.removeItem("token")
                                localStorage.removeItem("history")                          
                            }
                        }}
                            className="cursor-pointer text-text-gray px-4 py-1 text-start hover:text-primary">
                            <FontAwesomeIcon className="text-base  mr-2" icon={faRightFromBracket} />
                            Đăng xuất
                        </button>
                    </div>
                    <div className="col-span-5 lg:col-span-4 pt-18 ">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfileLayout;
