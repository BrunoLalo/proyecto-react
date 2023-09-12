import React from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

  const productos = [
    {
      id: "1",
      nombre: "Túnica de Gryffindor",
      descripcion: "Una túnica del colegio Hogwarts que pertenece a los hechiceros de Gryffindor",
      precio: "10.000",
      stock: "20",
      categoria: "ropa",
      imagen: "https://mimilandtiendafriki.com.ar/wp-content/uploads/2020/10/capatunica-harry-potter-gryffindor-adrogue-mimi-land.jpg"
    },
    {
      id: "2",
      nombre: "Varita de Voldemort",
      descripcion: "La varita única que pertenecía a Lord Voldemort",
      precio: "5000",
      stock: "15",
      categoria: "otros",
      imagen: "https://m.media-amazon.com/images/I/611rFJfiXTL.jpg"
    }, {
      id: "3",
      nombre: "Bufanda Slytherin",
      descripcion: "La bufanda oficial para todos los estudiantes de Slytherin",
      precio: "8000",
      stock: "35",
      categoria: "ropa",
      imagen: "https://elenanofriki.com/2705-medium_default/bufanda-slytherin-harry-potter.jpg"
    }, {
      id: "4",
      nombre: "Colección de libros",
      descripcion: "La colección completa de la saga de Harry Potter",
      precio: "35.000",
      stock: "8",
      categoria: "libro",
      imagen: "https://libria.com.ar/wp-content/uploads/2021/03/LIB-HP-BOX-SET-ESP-TB-BOLSI.jpg"
    }, {
      id: "5",
      nombre: "Taza de caldero",
      descripcion: "Una taza que simula un caldero de pociones mágicas",
      precio: "4.500",
      stock: "25",
      categoria: "otros",
      imagen: "https://m.media-amazon.com/images/I/61BylHVZnUL.jpg"
    }, {
      id: "6",
      nombre: "Guión de Animales Fantásticos",
      descripcion: "El guión original de la película Animales Fantasticos",
      precio: "10.000",
      stock: "5",
      categoria: "libro",
      imagen: "https://sbslibreria.vteximg.com.br/arquivos/ids/563731-1000-1000/9789878001708.jpg"
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
      <ItemDetail productos={productos}
      />
    </>
  );
}

export default ItemDetailContainer