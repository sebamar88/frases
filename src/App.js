import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase'

const Contenedor = styled.div`
  display:flex;
  align-items:center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size:330px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size:2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  &:hover{
    cursor:pointer;
    background-size: 400px;
  }
`;

function App() {

  //State de frases

  const [frase, setFrase ] = useState({})

  const consultarApi = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    setFrase(phrase[0])
  }

  //useEffect para cargar una frase
  useEffect(() =>{
    consultarApi()
  }, [])

  return (
    <Contenedor>
      { frase !== '' ? <Frase frase={frase} /> : null}
      
      <Boton
        onClick={consultarApi}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
    
  );
}

export default App;
