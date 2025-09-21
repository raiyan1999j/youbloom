import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function MainLayout(){
    return(
        <>
        <header>
            <Navbar/>
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