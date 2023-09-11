import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {

  const productos = [
    {
      id: "1",
      nombre: "Túnica de Gryffindor",
      descripcio: "Una túnica del colegio Hogwarts que pertenece a los hechiceros de Gryffindor",
      preci: "10.000",
      stoc: "20",
      categori: "ropa",
      image: "https://mimilandtiendafriki.com.ar/wp-content/uploads/2020/10/capatunica-harry-potter-gryffindor-adrogue-mimi-land.jpg"
    },
    {
      i: "2",
      nombr: "Varita de Voldemort",
      descripcio: "La varita única que pertenecía a Lord Voldemort",
      preci: "5000",
      stoc: "15",
      categori: "otros",
      image: "https://m.media-amazon.com/images/I/611rFJfiXTL.jpg"
    }, {
      i: "3",
      nombr: "Bufanda Slytherin",
      descripcio: "La bufanda oficial para todos los estudiantes de Slytherin",
      preci: "8000",
      stoc: "35",
      categori: "ropa",
      image: "https://elenanofriki.com/2705-medium_default/bufanda-slytherin-harry-potter.jpg"
    }, {
      i: "4",
      nombre: "Colección de libros",
      descripcio: "La colección completa de la saga de Harry Potter",
      preci: "35.000",
      stoc: "8",
      categori: "libro",
      image: "https://libria.com.ar/wp-content/uploads/2021/03/LIB-HP-BOX-SET-ESP-TB-BOLSI.jpg"
    }, {
      id: "5",
      nombr: "Taza de caldero",
      descripcio: "Una taza que simula un caldero de pociones mágicas",
      preci: "4.500",
      stoc: "25",
      categori: "otros",
      image: "https://m.media-amazon.com/images/I/61BylHVZnUL.jpg"
    }, {
      i: "6",
      nombr: "Guión de Animales Fantásticos",
      descripcio: "El guión original de la película Animales Fantasticos",
      preci: "10.000",
      stoc: "5",
      categori: "libro",
      image: "https://sbslibreria.vteximg.com.br/arquivos/ids/563731-1000-1000/9789878001708.jpg"
    }
  ]
  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProductos
  .then((res) =>{
  })
  .catch((error) =>{
    console.log(error);
  })

  return (
    <>
      <ItemDetail productos={product}
      />
    </>
  );
}

export default ItemDetailContainer