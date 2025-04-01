import { Link } from 'react-router'
import logo from '../../public/logo.png'
function Menu() {
    return (
        <nav className='py-1'>
            <header className='h-30 '>
                <img className='size-full object-cover' src={logo} alt="" />
            </header>
            <div className='my-1 hover:bg-gray-300'>
                <Link className='py-1 px-3 block' to='/'>Trang chủ</Link>
            </div>
            <div className='my-1 hover:bg-gray-300'>
                <Link className='py-1 px-3 block' to='/product/create'>Tạo sản phẩm</Link>
            </div>
            <div className='my-1 hover:bg-gray-300'>
                <Link className='py-1 px-3 block' to='/product/manage'>Quản lý sản phẩm</Link>
            </div>

        </nav>
    );
}

export default Menu;
