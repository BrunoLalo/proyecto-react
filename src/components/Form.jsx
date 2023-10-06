import { useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const msj = () => {
        if (nombre !== '' && email !== '') {
            toast.success('¡Has realizado tu compra!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                style: {
                    color:"black",
                    background: "palegreen",
                  },
            });
        }
    }


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
                <div className="form">
                    <FormControl onSubmit={handleSubmit}>
                        <FormLabel>Nombre</FormLabel>
                        <Input
                            required
                            background={'gainsboro'}
                            placeholder="Nombre"
                            type="text"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <FormLabel>Email</FormLabel>
                        <Input
                            required
                            background={'gainsboro'}
                            placeholder="Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Button className="btnComprar" type="submit" onClick={msj}>
                            Realizar Compra
                        </Button>
                    </FormControl>
                    <div className='idCompra'>Tu Id es: {idPurchase}</div>


                </div>

            </form>
            <ToastContainer />
        </>
    )
}

export default Form