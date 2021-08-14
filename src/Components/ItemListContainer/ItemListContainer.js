import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({grettins}) => {

    return (

        <div className="Container">
            <p className="Card"> {grettins} </p>
            <img src="./img/Rollo.1.jpg" alt=""/>
        </div>    

    )
}