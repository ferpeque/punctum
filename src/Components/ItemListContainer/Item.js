import './ItemListContainer.css'

export const Item = ({item}) =>{
    console.log(item)
    return (
    
    <div key={item.id}> 
    <p>{item.nombre}</p>
    <p>{item.precio}</p>
    <button>Comprar</button>
    </div>
)
}