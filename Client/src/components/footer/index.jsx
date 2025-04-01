import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/imgs/logo.png';
function Footer() {
    return (
        <footer className="mt-30 px-2 md:px-0 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <div className="col-span-1 relative h-40">
                    <img className="absolute -top-6 left-0 object-contain w-58 h-auto" src={logo} alt="" />
                    <p className="slogan px-10 text-xl text-primary font-(family-name:--font-dancing-script) italic">The legend of the steps</p>
                </div>
                <div className="col-span-1">
                    <ul className="list-none flex gap-2 flex-col mt-10 md:mt-0 text-sm">
                        <li><h1 className="text-xl mb-4">Về Journey</h1></li>
                        <li className="inline gap-2 items-center cursor-pointer">
                            <a className="hover:text-primary" href="">
                                Giới thiệu
                            </a>
                        </li>
                        <li className="inline gap-2 items-center cursor-pointer">
                            <a className="hover:text-primary" href="">
                                Thông tin
                            </a>
                        </li>
                        <li className="inline gap-2 items-center cursor-pointer">
                            <a className="hover:text-primary" href="">
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className="list-none flex gap-2 flex-col mt-10 md:mt-0 text-sm">
                        <li><h1 className="text-xl mb-4">Quy định</h1></li>
                        <li className="inline gap-2 items-center cursor-pointer">
                            <a className="hover:text-primary" href="">
                                Điều khoản sử dụng
                            </a>
                        </li>
                        <li className="inline gap-2 items-center cursor-pointer">
                            <a className="hover:text-primary" href="">
                                Chính sách thanh toán
                            </a>
                        </li>
                        <li className="inline gap-2 items-center cursor-pointer">
                            <a className="hover:text-primary" href="">
                                Chính sách bảo mật thông tin dữ liệu
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className="list-none flex gap-2 flex-col mt-10 md:mt-0 text-sm">
                        <li><h1 className="text-xl mb-4">Liên hệ</h1></li>
                        <li className="flex gap-2 items-center cursor-pointer">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>0399264715</p>
                        </li>
                        <li className="flex gap-2 items-center cursor-pointer">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>nguyentronghoang205@gmail.com</p>
                        </li>
                        <li className="flex flex-col gap-2 cursor-pointer">
                            <p>  Theo dõi chúng tôi trên:</p>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/share/18uRw59Dcv/" className="size-8 hover:scale-95 cursor-pointer leading-8 text-center text-base bg-primary text-white rounded-full"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="" className="size-8 hover:scale-95 cursor-pointer leading-8 text-center text-base bg-primary text-white rounded-full"><FontAwesomeIcon icon={faGithub} /></a>
                                <a href="" className="size-8 hover:scale-95 cursor-pointer leading-8 text-center text-base bg-primary text-white rounded-full"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="" className="size-8 hover:scale-95 cursor-pointer leading-8 text-center text-base bg-primary text-white rounded-full"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="copyright text-text-gray italic text-[13px] text-start my-4">@copyright by HoangNguyen 10/03/2025</p>
        </footer>
    );
}

export default Footer;