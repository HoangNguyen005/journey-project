import Header from "../../components/header";
import Footer from "../../components/footer";
import { useContext } from "react";
import { GlobalContext } from "../../context/storeContext";
import Login from "../../components/login";

function MainLayout({ children }) {
    const { showLogin } = useContext(GlobalContext)
    // console.log(login)
    return (
        <div className="">
            {showLogin ? <Login /> : null}

            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
