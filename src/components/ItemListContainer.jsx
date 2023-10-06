import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import Loader from "./Loader"

const ItemListContainer = () => {
  const {categoria} = useParams()
  const [productos, setProductos] = useState([])
  
  useEffect (() => {
    const db = getFirestore()
  
    const itemsCollection = collection(db, `products`)
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProductos(docs)
    })
  },[])

  const productosFiltro = productos.filter((productos) => productos.categoria === categoria)

  console.log(productosFiltro)
  console.log(categoria)
  
    return (
      productos.length === 0 ? <Loader/> : 
      categoria ? <ItemList productos={productosFiltro} /> : <ItemList productos={productos}/> 
    );
  };
  


export default ItemListContainer