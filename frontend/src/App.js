import './App.css';
import Menu from "./Components/menu";
import ListaContactos from './Components/listaContactos';
import { useState } from 'react';

function App() {
  const [filtroFav, setNumClics] = useState(false);

  const mostrarTodos = () => {
    setNumClics(false);
  }

  const mostrarFavs = () => {
    setNumClics(true);
  }

  return (
    <div className="App">
      <div className="divMenu">
        <Menu mtodos={mostrarTodos} mfavorito={mostrarFavs} ></Menu>
      </div>
      
      <div className="Comps">
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
