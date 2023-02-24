import './App.css';
import Menu from "./Components/menu";
import ListaContactos from './Components/listaContactos';
import { useState } from 'react';
import AgregarContacto from './Components/AddContacto';
import BuscarContacto from './Components/BuscarContacto'
import Swal from 'sweetalert2';

function App() {
  const [filtroFav, setNumClics] = useState(false);
  const [addCont, setAddCont] = useState(false);
  const [findCont, setFindCont] = useState(false);


  const mostrarTodos = () => {
    setNumClics(false);
    setAddCont(false)
    setFindCont(false)

  }

  const mostrarFavs = () => {
    setNumClics(true);
    setAddCont(false)
    setFindCont(false)
  
  }

  const mostrarAddContacts = () => {
    setAddCont(true)
    setFindCont(false)

  }

  const nomostrarac = () => {
    setAddCont(false)
    Swal.fire(
      'Cancelado',
      'No se agregó ningún contacto',
      'error'
    )
  }

  const nomostrar = () => {
    setAddCont(false)
  }

  // --------------------------
  const nomostrarbuscar = () => {
    setFindCont(false)
  }

  const mostrarBuscarContacto = () => {
    setFindCont(true)
    setAddCont(false)

  }
  const nomostraracbuscar = () => {
    setFindCont(false)
    Swal.fire(
      'Cancelado',
      'No se buscó ningún contacto',
      'error'
    )
  }


  return (
    <div className="App">
      <div className="divMenu">
        <Menu mtodos={mostrarTodos} mfavorito={mostrarFavs} maddcontact={mostrarAddContacts} mfindcontacto={mostrarBuscarContacto}></Menu>
      </div>

      <div className="Comps">
        <AgregarContacto mostrar={addCont} fnomostrar={nomostrarac} nomostrar={nomostrar} />
        <BuscarContacto mostrar={findCont} fnomostrar={nomostraracbuscar} nomostrar={nomostrarbuscar} />
        <div className='container-principal'>
          <div className='card-contactos'>
            <h3 className='tituloM'>{filtroFav ? "Favoritos" : "Todos los contactos"}</h3>
            <ListaContactos mostrar={filtroFav} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;