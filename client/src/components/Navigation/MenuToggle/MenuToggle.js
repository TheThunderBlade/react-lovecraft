import React from 'react'
import Style from './MenuToggle.module.css'

import ButtonIcon from '../../../Images/ButtonIcon.png'

const MenuToggle = props => {
    const cls = [
        Style.MenuToggle
    ]

    if(props.isOpen){
        cls.push(Style.open)
    }

    return (
        <img
            className={cls.join(' ')}
            onClick={props.onToggle}
            src={ButtonIcon}
            alt="MenuToggle-btn"
        />
    )
}

export default MenuToggle