import { Header } from "./components/Header"
import { Busqueda } from "./components/Busqueda"
import { useEffect, useState } from "react"
import axios from "axios"
/* import { response } from "express"; */

function App() {
  const [componentes, setComponentes] = useState([]); /* datos de forma dinamica */ 
  const [tablaComponentes, setTablaComponentes] = useState([]); /* datos de forma estatica */ 
  const [busqueda, setBusqueda] = useState([]); /* controlar lo que se va digitando en la busqueda */ 

  const peticionGet = async() => {
    await axios.get("https://apimocha.com/componentes-electronicos/posts")
    .then(response => {
      setComponentes(response.data); /* asignamos al estado usuario */
      setTablaComponentes(response.data); /* asignamos al estado tablaUsuario */
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    peticionGet();
  },[])

  return (
    <>
      <Header/>
      <Busqueda componentes={componentes}/>
    </>
  )
}

export default App
