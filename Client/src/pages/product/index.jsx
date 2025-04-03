import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router";

import ProductTemplate1 from '../../components/productTemplate1'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/button";
import classNames from "classnames";

import { url } from "../../context/storeContext";
function Product() {

  const [products, setProducts] = useState([])
  const { brand } = useParams()
  // console.log(brand)

  useEffect(() => {

    // fetch data from the API and set it to the state variable
    if (brand) {
      axios.get(`${url}/product/brand/${brand}`,{ withCredentials: true})
        .then(res => {
          // console.log(res.data)

          setProducts(res.data.data)
        })
        .catch(err => {
          console.error(err)
        })

    } else {
      axios.get(`${url}/product?limit=16`)
        .then(res => {
          // console.log(res.data)
          setProducts(res.data.data)
        })
        .catch(err => {
          console.error(err)
        })
    }

  }, [brand])

  return (
    <div className="product-page container mx-auto relative">
      <div className=" h-30 rounded-sm flex flex-col justify-center bg-background leading-20 ">
        <h1 className="title text-center text-2xl mb-2">{brand ? brand : 'Tất cả sản phẩm'}</h1>
        <div className="flex justify-center">
          <p className="text-sm text-text-gray px-4">Trang chủ</p>
          <p className="text-sm text-text-gray px-4 capitalize border-l border-gray">Sản phẩm</p>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-6 gap-16">
        <div className=" col-span-5 lg:col-span-1">
          <div className="flex flex-col">
            <h1 className="mb-2 text-base text-black/80 uppercase font-bold">Thương hiệu</h1>
            <NavLink className={({ isActive }) => classNames("hover:text-black text-text-gray font-medium border-r-2 border-transparent", { "!text-primary !border-primary": isActive })} to='/product'>Tất cả</NavLink>
            <NavLink className={({ isActive }) => classNames("hover:text-black text-text-gray font-medium border-r-2 border-transparent", { "!text-primary !border-primary": isActive })} to='/product/brand/Nike'>Nike</NavLink>
            <NavLink className={({ isActive }) => classNames("hover:text-black text-text-gray font-medium border-r-2 border-transparent", { "!text-primary !border-primary": isActive })} to='/product/brand/Adidas'>Adidas</NavLink>
            <NavLink className={({ isActive }) => classNames("hover:text-black text-text-gray font-medium border-r-2 border-transparent", { "!text-primary !border-primary": isActive })} to='/product/brand/Vans'>Vans</NavLink>
            <NavLink className={({ isActive }) => classNames("hover:text-black text-text-gray font-medium border-r-2 border-transparent", { "!text-primary !border-primary": isActive })} to='/product/brand/Puma'>Puma</NavLink>
            <NavLink className={({ isActive }) => classNames("hover:text-black text-text-gray font-medium border-r-2 border-transparent", { "!text-primary !border-primary": isActive })} to='/product/brand/Jordan'>Jordan</NavLink>
          </div>
          <form className="font-medium text-text-gray">
            <h1 className="text-bass mt-6 mb-2 text-base text-black/80 uppercase font-bold">Sắp xếp bằng</h1>
            <div className="flex items-center">
              <label className="select-none flex-1" htmlFor="desc">Giá cao đến thấp</label>
              <input type="radio" value="descending" name="sort" id="desc" />
            </div>
            <div className="flex items-center">
              <label className="select-none flex-1" htmlFor="asc">Giá thấp đến cao</label>
              <input type="radio" value="ascending" name="sort" id="asc" />
            </div>
            <div className="flex items-center mt-4">
              <label className="select-none flex-1" htmlFor="man">Nam</label>
              <input type="radio" value="man" name="sex" id="man" />
            </div>
            <div className="flex items-center">
              <label className="select-none flex-1" htmlFor="women">Nữ</label>
              <input type="radio" value="woman" name="sex" id="women" />
            </div>

            <Button primary className='text-white mt-10 w-[50%] h-8 rounded-sm' type="submit">Save</Button>
          </form>
        </div>

        <div className="col-span-5 lg:col-span-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            {products.map(product => (
              <div className="col-span-1 " key={product._id}>
                <ProductTemplate1
                  image={product.images[0]}
                  name={product.name}
                  price={product.price}
                  slug={product.slug}
                  brand={product.brand}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
