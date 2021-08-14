import React from 'react'
import './NavBar.css';
import {CartWidget} from './CartWidget.js'

export const Navbar = () => {

    return (

        <header className ='Encabezado'> 
            <h1 className ='Titulo'>PUNCTUM</h1>

            <nav className ='Nav'>
                <a href='#'> Productos      </a>
                <a href='#'> Nosotros       </a>
                <CartWidget/>  
            </nav>
        </header>
    )

}