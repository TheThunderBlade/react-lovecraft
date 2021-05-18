import React from "react";
import {Carousel} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import Style from './Bestiary.module.css'

import Byakhee from './images/Byakhee.jpg'
import Elders from './images/Elders.jpg'
import Hominid from './images/Hominid.jpg'
import NightGhost from './images/NightGhost.jpg'
import Shantack from './images/Shantack.jpg'


const Bestiary = () => {
    const checkWidth = window.screen.width

    const bestiaryContent = [
        {
            creatureImg: Byakhee,
            creatureName: 'Бьякхи',
            to: `/creature/Byakhee`
        },
        {
            creatureImg: Elders,
            creatureName: 'Старцы',
            to: `/creature/Elders`
        },
        {
            creatureImg: Hominid,
            creatureName: 'Ленгский Гоминид',
            to: `/creature/Hominid`
        },
        {
            creatureImg: NightGhost,
            creatureName: 'Ночной призрак',
            to: `/creature/NightGhost`
        },
        {
            creatureImg: Shantack,
            creatureName: 'Шантак',
            to: `/creature/Shantack`
        },

    ]

    const pageFormatSelection = () => {
        if (checkWidth <= 414) {
            return bestiaryContent.map((item, index) => (
                <div key={index}>
                    <NavLink to={item.to}><h2 style={{color: 'white', textAlign: 'center'}}>{item.creatureName}</h2></NavLink>
                    <img
                        className='d-block w-100'
                        src={item.creatureImg}
                        alt={item.creatureName}
                    />
                </div>
            ))

        } else {
            return (
                <Carousel fade>
                    {bestiaryContent.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className='d-block w-100'
                                src={item.creatureImg}
                                alt={item.creatureName}
                            />
                            <Carousel.Caption>
                                <NavLink to={item.to}><h2 style={{color: 'black'}}>{item.creatureName}</h2></NavLink>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )
        }
    }

    return (
        <div className={Style.mainSection}>
            {pageFormatSelection()}
        </div>
    )
}

export default Bestiary