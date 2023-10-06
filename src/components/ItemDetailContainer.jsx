import React from "react";
import ItemDetail from "./ItemDetail";
import {useEffect, useState} from 'react'
import {getFirestore, getDocs, collection} from 'firebase/firestore'
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const {id} = useParams()
  const [producto, setProducto] = useState([])
  
  
  
  useEffect(()=>{
    const db = getFirestore()
    const itemsCollection = collection(db, "productos")
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProducto(docs)
    })
  },[])
  
  
  const productoFiltro = producto.filter((producto) => producto.id == id)
  
    return (
      <div className="detailCard">
        {
          productoFiltro.length > 0 ?
          productoFiltro.map(p => {
            return(
              <ItemDetail producto={p} key={p.id}/>
              )
            }) : <Loader/>
          }
          </div>
  
      
  
      )}
  

export default ItemDetailContainer