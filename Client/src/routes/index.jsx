// Pages
import config from '../configs'
import Home from '../pages/home'
import Product from '../pages/product'
import Detail from '../pages/detail'
import Contact from '../pages/contact'
import Cart from '../pages/cart'
import Profile from '../pages/profile/user'
import ProfileLike from '../pages/profile/like'
import ProfileLayout from '../layouts/profileLayout'
import Setting from '../pages/profile/setting'
import Blog from '../pages/blog'

// Public routes
const publicRoutes = [
    {
        path: config.routes.home,
        page: Home,
    },
    {
        path: config.routes.product,
        page: Product,
    },
    {
        path: config.routes.brand,
        page: Product,
    },
    {
        path: config.routes.detail,
        page: Detail,
    }, 
    {
        path: config.routes.cart,
        page: Cart,
    },
    {
        path: config.routes.blog,
        page: Blog,
    },
    {
        path: config.routes.contact,
        page: Contact,
    },
    {
        layout: ProfileLayout,
        path: config.routes.profile,
        page: Profile,
    },
    {
        layout: ProfileLayout,
        path: config.routes.profileLike,
        page: ProfileLike,
    },
    {
        layout: ProfileLayout,
        path: config.routes.profileSetting,
        page: Setting,
    }
]

// Privete routes
const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }
