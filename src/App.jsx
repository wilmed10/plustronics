import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { Busqueda } from "./components/Busqueda"
import { Banner } from "./components/Banner"
import { Destacados } from "./components/Destacados"
import { Footer } from "./components/Footer"
import { InfoBanner } from "./components/InfoBanner"
/* import data from '../data.json' */
/* import axios from "axios" */
/* import { response } from "express" */
 
const API_COMPONENTS = 'http://192.168.1.5:3000/componentes'

function App() {
  /* const [articulos, setArticulos] = useState([]); */ /* datos de forma dinamica */ 
  const [compBusq, setCompBusq] = useState([]); /* resultado de busqueda */
  const [mostrarComponentes, setMostrarComponentes] = useState(false);

  useEffect(() => {
    async function getData () {
      const response = await fetch(API_COMPONENTS);
      const data = await response.json();
      setCompBusq(data); 
    }
    getData()
  },[])
  
  const actualizarComponentes = (nuevosComponentes) => {
    setCompBusq(nuevosComponentes)
  }
  const actualizarEstadoMostrarComponentes = (estado) => {
    setMostrarComponentes(estado);
  };
  
  return (
    <>
      <Header componentes={compBusq} actualizarComponentes={actualizarComponentes} actualizarEstadoMostrarComponentes={actualizarEstadoMostrarComponentes}/>
      {mostrarComponentes && <Busqueda componentes={compBusq}/>}
      <Banner/>
      <Destacados/>
      <InfoBanner/>
      <Footer/>
    </>
  )
}

export default App

/* await axios.get("https://apimocha.com/componentes-electronicos/posts") */
/* await axios.get("http://192.168.1.5:3000/componentes") */
/* await axios.get(API_COMPONENTS)
.then(response => {
  setArticulos(response.data); // asignamos al estado componente 
  setCompBusq(response.data);
}).catch(error => {
  console.log(error);
}) */