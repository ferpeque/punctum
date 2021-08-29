import './ItemListContainer.css'
import { Link } from "react-router-dom"

export const Item = ({item}) =>{
    console.log(item)
    return (
    
    <div key={item.id}> 
    <p>{item.nombre}</p>
    <p>{item.precio}</p>
    <img src={item.img}></img>
    <Link to = {`/detail/${item.id}`}>  <button>ver más</button>  </Link>

    </div>
)
}