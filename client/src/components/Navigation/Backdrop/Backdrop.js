import React from 'react'
import Style from './Backdrop.module.css'

const Backdrop = props => <div className={Style.Backdrop} onClick={props.onClick} />

export default Backdrop