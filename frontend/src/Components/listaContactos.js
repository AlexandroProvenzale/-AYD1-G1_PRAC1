import React, { useState, useEffect } from 'react';
import Contacto from './contacto';

function ListaContactos({mostrar}) {
    const [contact, initContact] = useState([]);

    const fetchContactos = async () => {
        if (mostrar) {
            const response = await fetch('http://localhost:5000/favoritosContactos', {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
            })
            if (!response.ok) {
                throw new Error('Data coud not be fetched!')
            } else {
                return response.json()
            }
        }else{
            const response = await fetch('http://localhost:5000/todosContactos', {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
            })
            if (!response.ok) {
                throw new Error('Data coud not be fetched!')
            } else {
                return response.json()
            }
        }
    }

    useEffect(() => {
        fetchContactos()
        .then((res) => {
            initContact(res.Respuesta)
        })
        .catch((e) => {
            console.log(e.message)
        })
    }, [mostrar])

    return(        
        contact.map((item, idx) => {
            return (
                
                <Contacto key={idx} id={item.id} nombre={item.nombre} telefono={item.telefono} correo={item.correo} />
            )
        })
    );
}

export default ListaContactos;