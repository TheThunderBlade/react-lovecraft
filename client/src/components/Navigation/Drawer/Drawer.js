import React from "react";
import Style from './Drawer.module.css'
import Backdrop from "../Backdrop/Backdrop";
import {NavLink} from "react-router-dom";
import {logout} from "../../../axiosAction/user";
import {useDispatch, useSelector} from "react-redux";

const Drawer = props => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const userId = useSelector(state => state.user.currentUser.id)

    const cls = [Style.Drawer]

    if (!props.isOpen) {
        cls.push(Style.close)
    }

    const routesList = [
        {to: '/bestiary', routeName: 'Малый бестиарий'}
    ]

    const pushRoutes = () => {
        routesList.push(
            {to: '/registration', routeName: 'Регистрация'},
            {to: '/login', routeName: 'Вход'}
        )
    }

    const  pushAuthRoutes = () => {
        routesList.push(
            {to: `/userPage/${userId}`, routeName: 'Мой аккаунт'}
        )
    }

    return (
        <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    <li onClick={props.onClose}>
                        <NavLink activeClassName={Style.active} exact to={'/'}>Главная</NavLink>
                    </li>

                    {!isAuth && pushRoutes()}
                    {isAuth && pushAuthRoutes()}

                    {routesList.map((listItem, index) => <li key={index} onClick={props.onClose}>
                        <NavLink activeClassName={Style.active}  to={listItem.to}>{listItem.routeName}</NavLink>
                    </li>)}

                    {isAuth && <li onClick={props.onClose}>
                        <p onClick={e => {
                            e.preventDefault()
                            dispatch(logout())
                        }}>Выход</p>
                    </li>}
                </ul>
            </nav>
            {props.isOpen ? <Backdrop onClick={props.onClose}/> : null}
        </React.Fragment>
    )
}

export default Drawer