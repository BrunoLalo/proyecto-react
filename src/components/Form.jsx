import { useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2'

const Form = () => {

    // const Swal = require('sweetalert2')

    // Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'Your work has been saved',
    //     showConfirmButton: false,
    //     timer: 1500
    // })

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [idPurchase, setidPurchase] = useState(null);


    const db = getFirestore();


    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(ordersCollection, order).then(({ id }) => setidPurchase(id));
    };

    const order = {
        nombre,
        email,
    };

    const ordersCollection = collection(db, "orden");


    return (
        <>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>

            <h3>Id de tu compra: {idPurchase}</h3>
        </>
    )
}

export default Form