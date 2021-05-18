import React, {useState} from "react";
import OtherRaces from './images/Other races.jpg'
import OtherWorld from './images/Other worlds.jpeg'
import Cthulhu from './images/Cthulhu.jpg'
import {CthulhuBooks, otherRacesBooks, otherWorldsBooks} from "./books/bookExporter";

import Style from './HomePage.module.css'
import HoverImage from "../../components/hoverURLImage/hoverImage";

const HomePage = () => {
    const sectionData = [
        {
            sectionName: 'Иные расы и древние цивилизации',
            sectionImg: OtherRaces,
            sectionItems: otherRacesBooks
        },
        {
            sectionName: 'Иные миры и неведомое из космоса',
            sectionImg: OtherWorld,
            sectionItems: otherWorldsBooks
        },
        {
            sectionName: 'Ктулху и водная раса',
            sectionImg: Cthulhu,
            sectionItems: CthulhuBooks
        }
    ]

    const [linkImage, setLinkImage] = useState('')

    return (
        <div>
            {sectionData.map((item, index) => (
                <div style={{paddingTop: '2%'}} key={index}>
                    <h2 style={{color: 'white'}} align='center'>{item.sectionName}</h2>
                    <div className={Style.bookContent}>
                        <div>
                            <img src={item.sectionImg} alt={item.sectionImg.toString()}/>
                        </div>
                        <div className={Style.downloadSection}>
                            <h4>Скачать книги этого блока:</h4>
                            <ul>
                                {item.sectionItems.map((book, index) => (
                                    <li key={index}>
                                        <div className={Style.linkSection}>
                                            <div>
                                                {linkImage === book.bookName ? <HoverImage/> : null}
                                            </div>

                                            <a
                                                onMouseOut={() => setLinkImage('')}
                                                onMouseOver={() => setLinkImage(book.bookName)}
                                                download={book.book}
                                                href={book.book}>{book.bookName}</a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomePage