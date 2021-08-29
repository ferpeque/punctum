import { Item } from './Item'
import './ItemListContainer.css'
import { Link } from "react-router-dom"


export const ItemList = ( {producto} ) => {

    return (
    <section> 
        <div className="TitulosContainer">
        <h1> PRODUCTOS </h1>
        <Link to ={ 'category/rollos' } > <button>rollos</button> </Link>
        </div>
        <div>
            {
            producto.map((prod) => (
            <div className="Container">
                    <Item item={ prod }/>
           </div>
            ))}
        </div>
         
    </section>     
    )
}
/*
{producto.map((prod) => (

    
        <div key={prod.id} className="Container" > 
            <p>{prod.nombre}</p>
            <p>{prod.precio}</p>
            <button>Comprar</button>
        </div>
</div>
))}*/