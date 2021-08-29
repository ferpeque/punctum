import { Link } from "react-router-dom"

export const ItemDetail = ( {nombre, desc, precio, category} ) => {

    return (
    <div>

        <h2> {nombre} </h2>
        <p> {precio} </p>
        <p> {desc} </p>
        <Link to = {`category/${category}`}>  <button>Volver</button>  </Link>
        
     </div>
    )

} 