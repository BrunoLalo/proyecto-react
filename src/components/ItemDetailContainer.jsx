import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, 'products', `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProduct(docs);
      } else {
        console.log("Producto no encontrado");
      }
    });
  }, [id]);


  return (
    <Flex flexWrap="wrap" justifyContent="center" >
      <ItemDetail producto={product} key={id} />
    </Flex>
  )
}


export default ItemDetailContainer