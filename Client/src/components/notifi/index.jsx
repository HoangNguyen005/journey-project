import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './notifi.css'
import { useEffect, useRef } from "react";
function Notifi() {

    const notifiRef = useRef()

    useEffect(()=> {
        const timeOutId = setTimeout(()=> {
            notifiRef.current.remove();
        }, 2000)

        return (
            clearTimeout(timeOutId)
        )
    }, [])

    return (
        <div ref={notifiRef} className="notification flex flex-col items-center justify-center fixed z-50 top-[50%] left-[50%] translate-[-50%] w-90 h-60 bg-black/70 rounded-sm">
            <div className="size-14 flex mb-10 bg-green-500 rounded-full">
                <FontAwesomeIcon className="text-4xl m-auto text-white  " icon={faCheck} />
            </div>
            <h1 className="text-center text-white">Thêm vào giỏ hàng thành công</h1>
        </div>
    );
}

export default Notifi;