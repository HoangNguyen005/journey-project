import { useContext } from "react";
import { GlobalContext } from "../../context/storeContext";
import Nav from "../nav";
import logo from '../../assets/imgs/logo.png'
import './header.css'
import Button from "../button";
import Cart from "../cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import UserMenu from "../userMenu";
function Header() {

    const { setShowLogin, token, showNavBar, setShowNavBar } = useContext(GlobalContext)

    // console.log(show)
    return (
        <header id="header" className="!overflow-hidden flex items-center static left-0 right-0  h-16 lg:h-20 z-[999] bg-white text-black">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo lg:block hidden">
                    <img className="object-contain w-58 h-auto" src={logo} alt="" />
                </div>
                <div className="flex w-full lg:w-auto gap-4 items-center">
                    <div className="lg:block hidden">  <Nav /></div>
                    <div className="search w-full lg:w-auto flex items-center border border-[#333333] bg-white rounded-full">
                        <FontAwesomeIcon className="px-2 text-gray cursor-pointer" icon={faMagnifyingGlass} />
                        <input className="flex-1 text-gray border-0 outline-0 py-1" type="text" placeholder="Search" />
                    </div>
                    <div onClick={() => setShowNavBar(true)} className="lg:hidden block">
                        <FontAwesomeIcon className=" text-2xl cursor-pointer text-text hover:text-black" icon={faBarsStaggered} />
                    </div>
                    <div className="action lg:flex hidden ml-5 gap-4 items-center">
                        <Cart />
                        {!token ? (
                            <Button onClick={() => setShowLogin(true)} primary className='rounded-sm py-1'>login</Button>
                        ) : (
                            <UserMenu />

                        )}
                    </div>
                </div>
            </div>

            <div style={{ 'transform': showNavBar ? 'translateX(0)' : 'translateX(100%)' }} className="block lg:hidden fixed top-0 bottom-0 transition-transform duration-300 linear bg-white right-0 shadow w-full md:w-[40%] z-50">
                <div className="cursor-pointer size-10 text-black font-bold text-center leading-10 mb-10" onClick={() => setShowNavBar(false)}>X</div>
                <Nav onClick={()=>setShowNavBar(false)} />
                <div className="action lg:hidden mt-40 block ml-5 gap-4 items-center">
                    {!token ? (
                        <Button onClick={() => setShowLogin(true)} primary className='rounded-sm py-1'>login</Button>
                    ) : (
                        <UserMenu />
                        
                    )}
                    <Cart />
                </div>
            </div>
            <div  onClick={() => setShowNavBar(false)} style={{'display': showNavBar?'block':'none'}} className="overlay fixed top-0 right-0 bottom-0 left-0 z-40 bg-black/70"></div>
        </header>
    );
}

export default Header;