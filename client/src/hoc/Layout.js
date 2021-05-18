import React, {useState} from 'react'
import Style from './Layout.module.css'
import Drawer from "../components/Navigation/Drawer/Drawer";
import MenuToggle from "../components/Navigation/MenuToggle/MenuToggle";

const Layout = props => {
    const [menu, setMenu] = useState(false)


    const toggleMenuHandler = () => {
        setMenu(!menu)
    }

    const menuCloseHandler = () => {
        setMenu(false)
    }


    return (
        <div className={Style.Layout}>
            <Drawer
                isOpen={menu}
                onClose={menuCloseHandler}
            />

            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={menu}
            />

            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout