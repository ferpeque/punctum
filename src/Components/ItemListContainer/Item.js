import './ItemListContainer.css'

export const Item = ({item}) =>{
    console.log(item)
    return (
    
    <div key={item.id}> 
    <p>{item.nombre}</p>
    <p>{item.precio}</p>
    <img src={item.img}></img>
    <button>Comprar</button>
    </div>
)
}