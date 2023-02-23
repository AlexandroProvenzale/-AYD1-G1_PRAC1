import React from "react";
import '../styles/contacto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faStar, faPhone, faAt, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';
import ModificarContacto from './ModContacto';
import Swal from "sweetalert2";

const i_trash = <FontAwesomeIcon icon={faTrashCan} />
const i_pencil = <FontAwesomeIcon icon={faPencil} />
const i_starf = <FontAwesomeIcon icon={faStar} />
const i_starr = <FontAwesomeIcon icon={faStarHalfStroke} />
const i_arroba = <FontAwesomeIcon icon={faAt} />
const i_telefono = <FontAwesomeIcon icon={faPhone} />
const i_persona = <FontAwesomeIcon icon={faPerson} />

function confirmar(){
    Swal.fire({
        text: "Está seguro que desea eliminar este contacto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo eliminarlo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (!result.isConfirmed) {
          return true
        }else{
        return false;
        }
      })
      
}

function Contacto(props){
    const [idContacto, setIdContacto] = useState({
        id_contacto:""
      });
    const [modCont, setModCont] = useState(false);    

    const mostrarAddContacts = () => {
      setModCont(true)
    }

    const nomostrarmc = () => {
      setModCont(false)
      Swal.fire('Cancelado',
      'No se modificó ningún contacto',
      'info')
    }

    const nomostrar = () => {
      setModCont(false)
    }

    const handleClick = async (val) => {
        idContacto.id_contacto = val.target.value
        console.log(JSON.stringify(idContacto))

        try {
        const response = await fetch('http://localhost:5000/eliminarContacto', {
            method: 'DELETE',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify(idContacto),
        });
    
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            Swal.fire(
                "Eliminado",
                "Se ha eliminado el contacto",
                "success"
            )
            const result = await response.json()
            console.log(JSON.stringify(result, null, 4))
        }
        } catch (e) {
        console.log(e.message)
        }
        
      }

    return (
      <div className="card-contacto">
          <img src={require('../imagenes/profile.png')} className="rounded-circle imagen-contacto" />
          <div className="datos-contacto">
              <div className='fav-contacto'>
                  <button type="button" className="btn btn-warning btnFav">{i_starr}</button>
              </div>
              <p className="nombre-contacto">{i_persona} {props.nombre} {props.apellido}</p>
              <p className="tel-contacto">{i_telefono} {props.telefono}</p>
              <p className="correo-contacto">{i_arroba} {props.correo}</p>
              <div className='grupo-botones'>
                  <button type="button" className="btn btn-success btnMod" onClick={mostrarAddContacts}>{i_pencil}</button>
                  <button type="button" className="btn btn-danger btnDel" onClick={e => handleClick(e, "value")} value={props.id}>{i_trash}</button>
              </div>
          </div>
          <div>
          <ModificarContacto mostrar={modCont} fnomostrar={nomostrarmc} props={props} nomostrar={nomostrar}/>
          </div>
      </div>
    );
}

export default Contacto;