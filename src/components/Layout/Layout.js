
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";


const Layout = (props) => {
    
    return (
        <div>
            <h1>Welcome to Noble Blog</h1>
            <Navigation />
            <Outlet />
        </div>
    )
};
export default Layout;