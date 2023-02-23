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
const i_arroba = <FontAwesomeIcon icon={faAt} className="ico2"/>
const i_telefono = <FontAwesomeIcon icon={faPhone} className="ico2"/>
const i_persona = <FontAwesomeIcon icon={faPerson} className="ico2"/>

function AddContact({mostrar, fnomostrar}) {

  const [contacto, setContacto] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleClick = async () => {

    try {
      const response = await fetch('http://localhost:5000/agregarContacto', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
        },
        body: JSON.stringify(contacto),
      });

      if (!response.ok) {
        throw new Error('Data coud not be fetched!')
      } else {
          Swal.fire(
            "Agregado",
            "Se agregó el contacto",
            "success"
          )
          const result = await response.json()
          console.log(JSON.stringify(result, null, 4))
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
            <h3 id="addC">Añadir contacto</h3>
          </div>
          <div className="form-container">
            {i_persona}
            <div className="nombre-completo">
              <input
                type="text"
                onChange={(e) => {
                  contacto.firstname = e.target.value;
                }}
                placeholder="Nombre"
                className="textos"
                id="name-form"
              />
              <input
                type="text"
                onChange={(e) => {
                  contacto.lastname = e.target.value;
                }}
                placeholder="Apellido"
                className="textos"
                id="lastname-form"
              />
            </div>
            <div className="nombre-completo">
              <div>
                {i_telefono}
                <input
                  type="text"
                  onChange={(e) => {
                    contacto.phone = e.target.value;
                  }}
                  placeholder="Número"
                  className="textos"
                  id="phone-form"
                />
              </div>
              <div>
                {i_arroba}
                <input
                  type="email"
                  onChange={(e) => {
                    contacto.email = e.target.value;
                  }}
                  placeholder="Correo electrónico"
                  className="textos"
                  id="email-form"
                />
              </div>
            </div>
            <div className='grupo-botones'>
                  <button type="button" className="btn btn-success btnMod" onClick={handleClick}>{i_check}</button>
                  <button type="button" className="btn btn-danger btnDel" onClick={fnomostrar}>{i_trash}</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AddContact;