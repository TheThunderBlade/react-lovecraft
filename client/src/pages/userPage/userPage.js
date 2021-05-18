import React, {useState} from 'react';
import {useSelector} from "react-redux";
import defaultUserImage from './defaultUserImage/defaultUserImage.jpg'

import Style from './userPage.module.css'
import {setUserImageHandler} from "../../axiosAction/user";

const UserPage = () => {
    const userId = useSelector(state => state.user.currentUser.id)
    const userNickname = useSelector(state => state.user.currentUser.nickname)
    const userEmail = useSelector(state => state.user.currentUser.email)
    const userAvatar = useSelector(state => state.user.currentUser.avatar)

    const [userImage, setUserImage] = useState('')

    const setUserAvatar = () => {
        return userAvatar ? userAvatar : defaultUserImage
    }

    return (
        <div>
            <div className={Style.userDataContainer}>
                <div>
                    <h4>Фотография профиля</h4>

                    <img className={Style.userImage} src={setUserAvatar()} alt="userImage"/>

                    <form onSubmit={e => {
                        e.preventDefault()
                        console.log(userEmail, userImage)
                        setUserImageHandler(userEmail, userImage)
                    }}
                          className={Style.Form}>
                        <input value={userImage} onChange={event => setUserImage(event.target.value)}
                               placeholder='Введите URL фотографии' type="text"/>
                        <button type='submit' className='btn-sm btn-info'>Сменить фотографию</button>
                    </form>
                </div>

                <div className={Style.userData}>
                    <h4>Данные профиля</h4>
                    <p>Имя пользователя: {userNickname}</p>
                    <p>ID пользователя: {userId}</p>
                    <p>Email пользователя: {userEmail}</p>
                </div>
            </div>
        </div>
    )
}

export default UserPage;