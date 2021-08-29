import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { ItemDetail } from './itemDetail'
import { pedirdatos } from '../../helpers/utils'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState('');
    const { itemId }  = useParams ()

    console.log(item)

    useEffect (()=>{
        pedirdatos()
            .then 
                ( resp =>   {
                    const arrayFind = resp.find( prod => prod.id === parseInt(itemId))
                         setItem (arrayFind) 
                            }) 
                },[itemId])


return (
    <div>

         <ItemDetail {...item}/>

    </div>
)

}