import React from 'react'
import './NavBar.css';
import {CartWidget} from './CartWidget.js'
import { Link } from "react-router-dom"

export const Navbar = () => {

    return (

        <header className ='Encabezado'> 
          <Link className ='Titulo' to = {'/'}>  <h1 >  PUNCTUM  </h1> </Link> 

            <nav className ='Nav'>
                 <Link to = {'/productos'}  className ='NavLink' > <div>  Productos  </div>     </Link>   
                 <Link to = {'/nosotros'}   className ='NavLink'>  <div>  Nosotros  </div>     </Link>
                <CartWidget/>  
            </nav>
        </header>
    )

}