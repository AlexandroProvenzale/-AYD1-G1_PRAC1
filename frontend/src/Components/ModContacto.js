import '../styles/AddContacto.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faAt, faPerson, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';
import Swal from "sweetalert2";

const i_xmark = <FontAwesomeIcon icon={faXmark} />
const i_check = <FontAwesomeIcon icon={faCheck} />
const i_contact = <FontAwesomeIcon icon={faWandMagicSparkles} />
const i_arroba = <FontAwesomeIcon icon={faAt} className="ico2"/>
const i_telefono = <FontAwesomeIcon icon={faPhone} className="ico2"/>
const i_persona = <FontAwesomeIcon icon={faPerson} className="ico2"/>

function ModContacto({mostrar, fnomostrar, props, nomostrar}) {

  const [contacto, setContacto] = useState({
    id_contacto: props.id.toString(),
    firstname: props.nombre,
    lastname: props.apellido,
    email: props.correo,
    phone: props.telefono.toString(),
  });

  const handleClick = async () => {
    console.log(contacto)
    try {
      const response = await fetch('http://localhost:5000/modificarContacto', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
        },
        body: JSON.stringify(contacto),
      });

      if (!response.ok) {
        Swal.fire(
            "Ocurrió un problema",
            "No fue posible modificar el contacto",
            "error"
          )
        throw new Error('Data coud not be fetched!')
      } else {
          Swal.fire(
            "Modificado",
            "Se modificó el contacto",
            "success"
          )
          {nomostrar()}
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
            <h3 id="addC">Modificar contacto</h3>
          </div>
          <div className="form-container">
            {i_persona}
            <div className="nombre-completo">
              <input
                type="text"
                value={contacto.firstname}
                onChange={(e) => {
                    setContacto({firstname: e.target.value, lastname: contacto.lastname, email: contacto.email, phone: contacto.phone, id_contacto: contacto.id_contacto});
                }}
                placeholder="Nombre"
                className="textos"
                id="name-form"
              />
              <input
                type="text"
                value={contacto.lastname}
                onChange={(e) => {
                    setContacto({lastname: e.target.value, firstname: contacto.firstname, email: contacto.email, phone: contacto.phone, id_contacto: contacto.id_contacto});
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
                  value={contacto.phone}
                  onChange={(e) => {
                    setContacto({phone: e.target.value, lastname: contacto.lastname, email: contacto.email, firstname: contacto.firstname, id_contacto: contacto.id_contacto});
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
                  value={contacto.email}
                  onChange={(e) => {
                    setContacto({email: e.target.value, lastname: contacto.lastname, firstname: contacto.firstname, phone: contacto.phone, id_contacto: contacto.id_contacto});
                  }}
                  placeholder="Correo electrónico"
                  className="textos"
                  id="email-form"
                />
              </div>
            </div>
            <div className='grupo-botones'>
                  <button type="button" className="btn btn-success btnMod" onClick={handleClick}>{i_check} Modificar</button>
                  <button type="button" className="btn btn-danger btnDel" onClick={fnomostrar}>{i_xmark} Cancelar</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ModContacto;