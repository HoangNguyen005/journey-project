import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toTop } from "../../helper";
import { useRef } from "react";
const handleClick = () => {
    toTop()
}
function ToTop() {
    const btnRef = useRef()
    window.onscroll = () => {
        // if(window.scrollY > 400) {
        //     btnRef.current.style.visibility = 'visible'
        // } else {
        //     btnRef.current.style.visibility = 'hidden'
        // }
    }

    return ( 
        <button 
        ref={btnRef}
        onClick={handleClick} 
        className="z-50 invisible active:scale-95 fixed bottom-30 cursor-pointer right-16 size-12 rounded-full border border-primary leading-12 text-center text-primary text-sm ">
            <FontAwesomeIcon icon={faAngleUp}/>
        </button>
     );
}

export default ToTop;