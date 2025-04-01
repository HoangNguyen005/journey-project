import { NavLink } from "react-router";
import config from "../../configs";
import classNames from "classnames";
function Nav({onClick}) {
    return ( 
        <nav className="">
            <ul className="flex flex-col lg:flex-row text-black/80 items-center justify-center gap-1 lg:gap-8 uppercase font-medium text-[12px]">
                <li className="block lg:inline w-full">
                    <NavLink onClick={onClick} className={({isActive})=>classNames( 'block lg:inline py-2 px-4 text-nowrap lg:py-0 lg:px-0 lg:!bg-transparent hover:bg-gray-100 ', {'text-primary': isActive})} to={config.routes.home}>Trang chủ</NavLink>
                </li>
                <li className="block w-full">
                    <NavLink onClick={onClick} className={({isActive})=>classNames( 'block lg:inline py-2 px-4 text-nowrap lg:py-0 lg:px-0 lg:!bg-transparent hover:bg-gray-100 ', {'text-primary': isActive})} to={config.routes.product} >Sản phẩm</NavLink>
                </li>
                <li className="block w-full">
                    <NavLink onClick={onClick} className={({isActive})=>classNames( 'block lg:inline py-2 px-4 text-nowrap lg:py-0 lg:px-0 lg:!bg-transparent hover:bg-gray-100 ', {'text-primary': isActive})} to={config.routes.blog} >Blogs</NavLink>
                </li>
                <li className="block w-full">
                    <NavLink onClick={onClick} className={({isActive})=>classNames( 'block lg:inline py-2 px-4 text-nowrap lg:py-0 lg:px-0 lg:!bg-transparent hover:bg-gray-100 ', {'text-primary': isActive})} to={config.routes.contact} >Liên hệ</NavLink>
                </li>
            </ul>
        </nav>
     );
} 

export default Nav;