import React from "react";
import NavBar from "./common/navBar";

const Layout = ({ children, navItems, containerStyle }) => {
    return (
        <React.Fragment>
            <NavBar items={ navItems } />
            <div className={"container" + containerStyle} >
                <div className="row">
                    { children}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Layout;