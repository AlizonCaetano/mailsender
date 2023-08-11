import { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/Input/PrimaryInput";

function App() {
  const [email, setEmail] = useState('')

  return (
    <div className='container'>
      <PrimaryInput 
        value={email} 
        label="Digite seu e-mail"
        onChange={event => setEmail(event.target.value)} 
        name="Email"
        />

    </div>
  )
}

export default App;
