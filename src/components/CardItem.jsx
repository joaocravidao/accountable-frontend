import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <>
        <li className="cards__item">
            <Link className="cards__item__linl">
                <figure className="cards__item__pic-wrap">
                    <img src="/" alt="todo-image" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text"></h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem