import React, { useState, useEffect } from 'react'
import { pedirdatos } from '../../helpers/utils'
import { ItemList } from './ItemList'


export const ItemListContainer = () => {

const [data, setData] = useState ([]) 

/*
    const pedido = new Promise((resolve, rejected) =>{
        resolve ("promesa soy")
         
    })
    pedido.then( resp => console.log(resp))
*/ 



//momento particular --- única vez en el montaje 
useEffect (() =>{
    pedirdatos()
    .then   ( resp => {
            //console.log(resp)
            setData(resp)
        })
   
},[])
    

    return (

        <ItemList producto={data}/>
       
    )
}   