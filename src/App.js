import './App.css';
import nikoLogo from '../src/imagenes/logo-niko.jpg'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {  // funcion flecha
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>

        <img
          className='niko-logo'       
          src={nikoLogo}
          alt='logo de niko'
          />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics= {numClics} />
        <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic} // siempre que algo este rodeado con llaves es por que es javascript
          />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
          />
      </div>


    </div>
  );
}

export default App;
