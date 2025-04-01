import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
function Contact() {
    const [show, setShow] = useState(false)

    return (
        <div className="fixed size-16 z-20 bottom-10 right-8 ">
            <div className="size-12 top-[50%] left-[50%] translate-[-50%] z-10 absolute  rounded-full opacity-70 bg-primary animate-ping"></div>
            <div onClick={() => {
                setShow(!show)
            }} className="size-full select-none cursor-pointer z-20 contact  text-white flex flex-col justify-center items-center gap-2 absolute top-0 left-0 rounded-full bg-primary">
                <FontAwesomeIcon className="text-xl" icon={faMessage} />
                <p className="text-[10px]">Liên hệ</p>
                <a style={{ 'display': show ? 'block' : 'none' }} href="https://www.facebook.com/share/18uRw59Dcv/" className="absolute z-0 icon-1  -top-10  size-8 hover:scale-95 cursor-pointer leading-8 text-center text-base bg-primary text-white rounded-full"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a style={{ 'display': show ? 'block' : 'none' }} href="" className="absolute z-0 icon-2 -top-6 -left-5 size-8 hover:scale-95 cursor-pointer leading-8 text-center text-base bg-primary text-white rounded-full"><FontAwesomeIcon icon={faGithub} /></a>
                <a style={{ 'display': show ? 'block' : 'none' }} href="" className="absolute z-0 icon-3 -left-10 bottom-5 size-8 hover:scale-95 cursor-pointer leading-8 text-center text-base bg-primary text-white rounded-full"><FontAwesomeIcon icon={faInstagram} /></a>
                <a style={{ 'display': show ? 'block' : 'none' }} href="" className="absolute z-0 icon-4 -left-6 -bottom-5 size-8 hover:scale-95 cursor-pointer leading-8 text-center text-base bg-primary text-white rounded-full"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        </div>
    );
}

export default Contact;