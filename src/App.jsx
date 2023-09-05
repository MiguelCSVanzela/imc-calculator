import { useState } from 'react'
import Header from "./components/Header";
import Form from "./components/Form";
import "./global.css";

function App() {

  const [nome, setNome] = useState("");

  return (
    <>
      <div className="containerInicial">
        <p className="mensagem">Descubra</p>
        <input type="text" className="inputInicial" onKeyUp={({ target }) => setNome(target.value)} placeholder="Seu Apelido " />
        <p className="mensagem">, Seu IMC</p>
      </div>
      
        <>
          <Header nome={nome} />
          <Form />
        </>
    </>
  )
} ''

export default App
