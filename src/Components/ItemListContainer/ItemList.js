import { Item } from './Item'
import './ItemListContainer.css'


export const ItemList = ( {producto} ) => {

    return (
    <section> 
        <h1>PRODUCTOS</h1>
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