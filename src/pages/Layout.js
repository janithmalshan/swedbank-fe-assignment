import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="page-content">
                <div className="page-content__wrapper">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Layout
