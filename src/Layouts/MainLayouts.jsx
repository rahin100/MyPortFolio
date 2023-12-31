import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import 'animate.css';


const MainLayouts = () => {
    return (
        <div className="bg-[#100c08]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;