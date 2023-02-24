import React from "react";
import '../styles/menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faStar, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";


const i_contacts = <FontAwesomeIcon icon={faAddressBook} />
const i_star = <FontAwesomeIcon icon={faStar} />
const i_addContact = <FontAwesomeIcon icon={faUserPlus} />
const i_info = <FontAwesomeIcon icon={faCircleInfo} />

function Menu({mtodos, mfavorito, maddcontact,mfindcontacto}){
    return (
        <div className="nav">
            <input type="checkbox"/>
                <span></span>
                <span></span>
                <div className="menu">
                    <button type='button' className='btn btnTr' onClick={mtodos}>{i_contacts} Todos los contactos</button>
                    <button type='button' className='btn btnTr' onClick={mfavorito}>{i_star} Favoritos</button>
                    <button type='button' className='btn btnTr' onClick={maddcontact}>{i_addContact} Nuevo contacto</button>
                    <button type='button' className='btn btnTr' onClick={mfindcontacto}>{i_star} Buscar Contacto</button>
                    <a href="https://pikaguty.github.io/ayd_about/">{i_info} Acerca de</a>
                </div>
        </div>

    );
}



export default Menu;