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
            const response = await fetch('http://localhost:5000/listarContactos', {
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
            initContact(res)
        })
        .catch((e) => {
            console.log(e.message)
        })
    }, [mostrar])

    return(        
        contact.map((item, idx) => {
            console.log(item)
            return (
                <Contacto key={idx} id={item.Id} nombre={item.Nombre} apellido={item.Apellido} telefono={item.Telefono} correo={item.Correo} />
            )
        })
    );
}

export default ListaContactos;