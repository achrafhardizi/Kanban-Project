//import useState hook to create menu collapse state
import React, {useState} from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {FiLogOut} from "react-icons/fi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import {Link} from "react-router-dom";


const Sidebar = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        setMenuCollapse(!menuCollapse);
    };

    return (
            <div id="sidebar">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse} className="d-flex">
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem>
                                <Link to='/home'>
                                    Sessions
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to='#'
                                //todo:wut to do with this link
                                >
                                    Settings
                                </Link>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut/>}
                            // todo:the logout option still have no idea wut to do it
                            >
                                Logout
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
    );
};

export default Sidebar;
