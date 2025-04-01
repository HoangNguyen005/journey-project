import { Routes, Route, BrowserRouter, Link } from 'react-router'

import Menu from './components/menu';
import Product from './pages/product'
import ManageProduct from './pages/manageProduct'
import Header from './components/header';
import Home from './pages/home';
import Edit from './pages/edit';

import './App.css'
function App() {
  return (
    <BrowserRouter>
      <div className="app  h-screen bg-cover bg-no-repeat bg-center bg-[url('https://wallpapers.com/images/hd/black-hole-background-6hm0qdnyqcs355gx.jpg')] flex items-center justify-center">
        <div className="w-[95%] h-[95%] overflow-hidden  shadow border bg-[#fff5] border-[#3333] backdrop-blur-xs rounded-lg ">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-2 bg-white/95 border-r border-[#999]">
              <Menu />
            </div>
            <div className="col-span-10 flex flex-col overflow-auto">
              <Header />
              <main className='content p-4 size-full overflow-auto '>
                <div className='size-full bg-white/94 rounded-lg overflow-auto no-scrollbar'>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/product/:path" element={<Product />} />
                    <Route path="/product/edit/:id" element={<Edit />} />
                    <Route path="/product/manage" element={<ManageProduct />} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>



    </BrowserRouter>
  );
}

export default App;