import React, {useState} from 'react'

import Style from './RegistrationPage.module.css'
import {registration} from "../../axiosAction/user";

const RegistrationPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')

    return (
        <div className={Style.RegDiv}>
            <form onSubmit={e => {
                e.preventDefault()
                registration(email, password, nickname).then(data => {
                    alert(data)
                })
                setEmail('')
                setPassword('')
                setNickname('')
            }} className="w-50 align-content-center">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"
                           className="form-control" aria-describedby="emailHelp"
                           placeholder="Введите email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"
                           className="form-control" placeholder="Пароль"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Nickname</label>
                    <input value={nickname} onChange={event => setNickname(event.target.value)} type="text"
                           className="form-control" placeholder="Введите ник"/>
                </div>
                <button type="submit" className="btn btn-primary">Регистрация</button>
            </form>
        </div>
    );
};

export default RegistrationPage;