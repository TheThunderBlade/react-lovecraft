import React, {useState} from 'react';
import Style from './Auth.module.css'
import {login} from "../../axiosAction/user";
import {useDispatch} from "react-redux";

const AuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    return (
        <div className={Style.AuthDiv}>

            <form onSubmit={e => {
                e.preventDefault()
                dispatch(login(email, password))
                setEmail('')
                setPassword('')
            }
            } className="w-50 align-content-center">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"
                           className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Введите email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"
                           className="form-control" id="exampleInputPassword1" placeholder="Пароль"/>
                </div>
                <button className="btn btn-primary">Войти</button>
            </form>

        </div>
    );
};

export default AuthPage;