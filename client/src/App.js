import Layout from "./hoc/Layout";
import {Redirect, Route, Switch} from "react-router-dom";
import Bestiary from "./pages/bestiaryPage/Bestiary";
import HomePage from "./pages/homePage/HomePage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import AuthPage from "./pages/authPage/AuthPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {login} from "./axiosAction/user";
import jwt_decode from "jwt-decode"
import UserPage from "./pages/userPage/userPage";
import CreaturePage from "./pages/creaturePages/CreaturePage";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)

    const dispatch = useDispatch()

    const routes = [
        {path: '/bestiary', component: Bestiary},
        {path: `/creature/:creature`, component: CreaturePage}
    ]

    const pushRoutes = () => {
        routes.push(
            {path: '/registration', component: RegistrationPage},
            {path: '/login', component: AuthPage}
        )
    }

    const pushAuthRoutes = () => {
        routes.push(
            {path: `/userPage/:userId`, component: UserPage}
        )
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const decodedToken = jwt_decode(localStorage.getItem('token'))
            dispatch(login(decodedToken.userEmail, decodedToken.userPassword))
        }
    }, [dispatch])

    return (
        <div className="container">

            <Layout>
                <Switch>
                    <Route path={'/'} exact component={HomePage}/>

                    {!isAuth && pushRoutes()}
                    {isAuth && pushAuthRoutes()}

                    {routes.map((route, index) =>
                        <Route key={index} path={route.path} component={route.component}/>
                    )}

                    <Redirect to={'/'}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
