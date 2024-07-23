import { useState } from 'react';
import { NavLink } from 'react-router-dom'

interface MenuList {
    heading: string,
    icon: JSX.Element,
    link: string,
    children?: MenuList[];
    id:number
}
const AdminMenu = ({ menuList }: { menuList: MenuList }) => {
    // check if children are there
    const isChildren = menuList.children;
    // handling dropdown class
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    // handle dropdown functionalities
    const handleDropDown = (index:number) => {
        setActiveDropdown(
            activeDropdown === index ? null : index
        );
    }
    return (
        <>
            <li className="sidebar-item" >
                <NavLink className={`sidebar-link waves-effect waves-dark sidebar-link ${isChildren && 'has-arrow'}`}
                    to={`${isChildren ? '#!' : `/admin${menuList.link}`}`}
                    aria-expanded="false"
                    onClick={()=>{
                        isChildren && handleDropDown(menuList.id)
                    }}
                >

                    {menuList.icon}
                    <span className="hide-menu">{menuList.heading}</span>
                </NavLink>
                {
                    isChildren && (
                        <ul aria-expanded="false" className={`collapse first-level ${activeDropdown && 'in'}`}>
                            <li className="sidebar-item">
                                <a href="form-basic.html" className="sidebar-link">
                                    <i className="mdi mdi-note-outline"></i><span className="hide-menu"> Form Basic </span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="form-wizard.html" className="sidebar-link">
                                    <i className="mdi mdi-note-plus"></i><span className="hide-menu"> Form Wizard </span>
                                </a>
                            </li>
                        </ul>
                    )
                }
            </li>
        </>
    )
}

export default AdminMenu