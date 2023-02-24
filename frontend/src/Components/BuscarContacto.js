import React, { useEffect } from "react";
import '../styles/AddContacto.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faAt, faPerson, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';
import Swal from "sweetalert2";

const i_trash = <FontAwesomeIcon icon={faTrashCan} />
const i_check = <FontAwesomeIcon icon={faCheck} />
const i_contact = <FontAwesomeIcon icon={faAddressBook} />
const i_arroba = <FontAwesomeIcon icon={faAt} className="ico2" />
const i_telefono = <FontAwesomeIcon icon={faPhone} className="ico2" />
const i_persona = <FontAwesomeIcon icon={faPerson} className="ico2" />

function BuscarContacto({ mostrar, fnomostrar, nomostrar }) {
    const [contacto, setContacto] = useState({
        nombre: "",
    });




    const handleClick_2 = async () => {

        try {
            console.log('holi2')
            console.log(JSON.stringify(contacto))
            const response = await fetch('http://localhost:5000/buscarContacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(contacto),
            });

            if (!response.ok) {
                throw new Error('Data coud not be fetched!')
            } else {

                { nomostrar() }
                const result = await response.json()
                console.log(JSON.stringify(result, null, 4))
                alert(JSON.stringify(result, null, 4))
                Swal.fire({
                    icon: 'success',
                    title: 'Alerta',
                    html: `<p>Id: ${result.result.Id}</p>`
                });
            }
        } catch (e) {
            console.log(e.message)
        }

    }

    if (mostrar) {
        return (
            <div className="sub-main">
                <div className="form-box">
                    <div className="ico">
                        {i_contact}
                        <h3 id="addC">Buscar Contacto</h3>
                    </div>
                    <div className="form-container">
                        {i_persona}
                        <div className="nombre-completo">
                            <input
                                type="text"
                                onChange={(e) => {
                                    contacto.nombre = e.target.value;
                                    console.log(e.target.value)
                                }}

                                placeholder="Nombre"
                                className="textos"
                                id="name-form"
                            />
                        </div>

                        <div className='grupo-botones'>
                            <button type="button" className="btn btn-success btnMod" onClick={handleClick_2}>Buscar</button>
                            <button type="button" className="btn btn-danger btnDel" onClick={fnomostrar}>Salir</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default BuscarContacto;