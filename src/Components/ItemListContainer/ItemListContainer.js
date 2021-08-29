import React, { useState, useEffect } from 'react'
import { pedirdatos } from '../../helpers/utils'
import { ItemList } from './ItemList'
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

const { catId } = useParams ()

console.log(catId)


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
    .then   
    ( resp => {
        if (catId) {
            const arrayFilter = resp.filter (prod => prod.category === catId)
            setData(arrayFilter)
        } else {
            setData(resp)
        }
        })
},[catId])

    return (

        <ItemList producto={data}/>
       
    )
}   