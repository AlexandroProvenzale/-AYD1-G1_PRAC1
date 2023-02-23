import './App.css';
import Menu from "./Components/menu";
import ListaContactos from './Components/listaContactos';
import { useState } from 'react';
import AgregarContacto from './Components/AddContacto';
import Swal from 'sweetalert2';

function App() {
  const [filtroFav, setNumClics] = useState(false);
  const [addCont, setAddCont] = useState(false);

  const mostrarTodos = () => {
    setNumClics(false);
    setAddCont(false)
  }

  const mostrarFavs = () => {
    setNumClics(true);
    setAddCont(false)
  }

  const mostrarAddContacts = () => {
    setAddCont(true)
  }

  const nomostrarac = () => {
    setAddCont(false)
    Swal.fire(
      'Cancelado',
      'No se agregó ningún contacto',
      'error'
    )
  }

  return (
    <div className="App">
      <div className="divMenu">
        <Menu mtodos={mostrarTodos} mfavorito={mostrarFavs} maddcontact={mostrarAddContacts}></Menu>
      </div>
      
      <div className="Comps">
        <AgregarContacto mostrar={addCont} fnomostrar={nomostrarac}/>
        <div className='container-principal'>
          <div className='card-contactos'>
            <h3 className='tituloM'>{filtroFav ? "Favoritos" : "Todos los contactos"}</h3>
            <ListaContactos mostrar={filtroFav}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;