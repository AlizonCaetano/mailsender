import { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/Input/PrimaryInput";
import { Button, Spacer } from "@chakra-ui/react";

function App() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  return (
    <div className='container'>
      <form action="">
        <div className='name-form-container'>
          <PrimaryInput 
            value={firstName} 
            name="firstname"
            label="Primeiro nome"
            placeholder="Primeiro nome"
            onChange={event => setFirstName(event.target.value)} 
            />

          <PrimaryInput 
            value={lastName} 
            name="lastname"
            label="Sobrenome"
            placeholder="Sobrenome"
            onChange={event => setLastName(event.target.value)} 
            />
        </div>
        <Spacer height="9"/>
        <PrimaryInput 
          value={email} 
          name="email"
          label="Digite seu e-mail"
          placeholder="Digite seu e-mail"
          onChange={event => setEmail(event.target.value)} 
          />
        <Spacer height="9"/>
        <Button colorScheme="green" width="100%" >enviar</Button>
      </form>
      <Spacer maxWidth="8"/>
      <div className="product-details">
        <h2>Assinatura mensal</h2>
        <Spacer maxWidth="4"/>
        <p>Você irá pagar</p>
        <span>R$ 250,00</span>
      </div>
    </div>
  )
}

export default App;
