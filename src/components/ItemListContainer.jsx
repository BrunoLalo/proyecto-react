import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Grid, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import Loader from "./Loader"

const ItemListContainer = () => {
  const {categoria} = useParams()
  const [productos, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(docs);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const productosFiltro = productos.filter((productos) => productos.categoria === categoria)  
    return (
      <Flex  flexWrap="wrap" justifyContent="space-around" alignItems="center" margin="80px">
      {loading ? (
        <Loader />
        ) : (
          <main className="main">
          <h1>BIENVENIDO A TU TIENDA MAGICA FAVORITA</h1>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {categoria ? (
              <ItemList productos={productosFiltro} />
            ) : (
              <ItemList productos={productos} />
            )}
          </Grid>
        </main>
      )}
    </Flex>    );
  };
  


export default ItemListContainer