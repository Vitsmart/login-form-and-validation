
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";


const Layout = (props) => {
    
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    )
};
export default Layout;