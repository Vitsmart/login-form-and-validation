
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";


const Layout = (props) => {
    
    return (
        <div>
            <p>How are you</p>
            <Navigation />
            <Outlet />
        </div>
    )
};
export default Layout;