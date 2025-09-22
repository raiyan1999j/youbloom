import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function MainLayout(){
    return(
        <>
        <header>
            <Navbar/>
            <Sidebar/>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            <Footer/>
        </footer>
        </>
    )
}