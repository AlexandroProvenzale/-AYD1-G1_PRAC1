import React from "react";
import '../styles/contacto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faStar, faPhone, faAt, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";


const i_trash = <FontAwesomeIcon icon={faTrashCan} />
const i_pencil = <FontAwesomeIcon icon={faPencil} />
const i_starf = <FontAwesomeIcon icon={faStar} />
const i_starr = <FontAwesomeIcon icon={faStarHalfStroke} />
const i_arroba = <FontAwesomeIcon icon={faAt} />
const i_telefono = <FontAwesomeIcon icon={faPhone} />
const i_persona = <FontAwesomeIcon icon={faPerson} />



function Contacto(props){
    return (
      <div className="card-contacto">
          <img src={require('../imagenes/profile.png')} className="rounded-circle imagen-contacto" />
          <div className="datos-contacto">
              <div className='fav-contacto'>
                  <button type="button" className="btn btn-warning btnFav">{i_starr}</button>
              </div>
              <p className="nombre-contacto">{i_persona} {props.nombre}</p>
              <p className="tel-contacto">{i_telefono} {props.telefono}</p>
              <p className="correo-contacto">{i_arroba} {props.correo}</p>
              <div className='grupo-botones'>
                  <button type="button" className="btn btn-success btnMod">{i_pencil}</button>
                  <button type="button" className="btn btn-danger btnDel">{i_trash}</button>
              </div>
          </div>
      </div>
    );
}

export default Contacto;