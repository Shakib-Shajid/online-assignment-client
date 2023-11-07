import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;