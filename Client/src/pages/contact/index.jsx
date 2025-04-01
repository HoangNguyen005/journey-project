import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons' 

import Button from "../../components/button";

import './contact.css'

function Contact() {
    return (
        <div className="contact">
            <header className="text-center mt-10 flex flex-col items-center container mx-auto">
                <h1 className="title text-4xl text-gray font-bold te">Liên hệ với chúng tôi</h1>
                <p className="mt-6 max-w-[900px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio quam neque necessitatibus magnam rerum fugiat minus minima porro natus quisquam inventore explicabo in hic ut est sequi, eveniet asperiores.</p>
            </header>
            <div className="bg-background py-12 mt-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        <div className="col-span-1">
                            <header className="mb-4">
                                <h1 className="text-2xl font-bold">Liên hệ ngay</h1>
                                <p className="text-text-gray text-sm">Loreaut voluptatum vitae adipisci totam! Est non quod error facilis nulla vero nesciunt? Rerum sint nulla in cupiditate provident soluta quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem laudantium vel laboriosam perferendis debitis?</p>
                            </header>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="size-10 leading-10 text-center text-lg bg-primary text-white rounded-full "><FontAwesomeIcon icon={faLocationDot} /></div>
                                    <div >
                                        <h1 className="text-gray text-lg">Địa chỉ</h1>
                                        <p className="text-text-gray text-sm">Nguyễn Sinh Sắc, Vinh, Nghệ An</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-10 leading-10 text-center text-lg bg-primary text-white rounded-full"><FontAwesomeIcon icon={faPhone} /></div>
                                    <div >
                                        <h1 className="text-gray text-lg">Số điện thoại</h1>
                                        <p className="text-text-gray text-sm">0399264715</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-10 leading-10 text-center text-lg bg-primary text-white rounded-full"><FontAwesomeIcon icon={faEnvelope} /></div>
                                    <div >
                                        <h1 className="text-gray text-lg">Email</h1>
                                        <p className="text-text-gray text-sm">nguyentronghoang205@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <footer className="mt-4">
                                <h1 className="text-lg mb-4">Theo dõi chúng tôi trên</h1>
                                <div className="flex gap-4">
                                    <div className="size-10 hover:scale-95 cursor-pointer leading-10 text-center text-lg bg-primary text-white rounded-full"><FontAwesomeIcon icon={faFacebookF} /></div>

                                    <div className="size-10 hover:scale-95 cursor-pointer leading-10 text-center text-lg bg-primary text-white rounded-full"><FontAwesomeIcon icon={faGithub} /></div>

                                    <div className="size-10 hover:scale-95 cursor-pointer leading-10 text-center text-lg bg-primary text-white rounded-full"><FontAwesomeIcon icon={faInstagram} /></div>

                                    <div className="size-10 hover:scale-95 cursor-pointer leading-10 text-center text-lg bg-primary text-white rounded-full"><FontAwesomeIcon icon={faTwitter} /></div>


                                </div>
                            </footer>
                        </div>

                        <div className="col-span-1">
                            <form className="rounded-2xl border border-border lg:w-[80%] mx-auto flex flex-col bg-white lg:px-12 py-6 p-4" action="">
                                <header className="text-2xl font-bold text-gray mb-6">
                                   Gửi tin nhắn
                                </header>

                                <div className="flex w-full flex-col gap-6">
                                    <input type="text" placeholder="Name" className="w-full py-1 px-2  outline-none border-b border-gray-400" required />
                                    <input type="email" placeholder="Email address" className="w-full py-1 px-2  outline-none border-b border-gray-400" required />
                                    <textarea name="" placeholder="Message" id="" className="w-full py-1 px-2  min-h-20 outline-none border-b border-gray-400"></textarea>
                                </div>
                                <p className="text-sm text-text-gray my-4">Lorem ipsum dolor sit amet cpsum illum optio debitis?</p>
                                <Button rounded primary className="text-white py-2 px-12 self-end" type="submit">Gửi</Button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;