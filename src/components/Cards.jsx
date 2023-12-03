import React from 'react'
import CardItem from './CardItem'
import '/src/components/Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out this EPIC app!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards