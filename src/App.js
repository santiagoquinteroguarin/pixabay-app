import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {

  // state de la App
  const [search, setSavedSearch] = useState('');

  useEffect(() => {
    // no ejecutar la primera vez
    if(search === '') return;

    const queryAPI = async () => {
      const imagesPerPage = 10;
      const key = '19487238-bd77e2c83db394142ecd7b5d1';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;

      const response = await fetch(url);
      const data = await response.json();

      setSavedSearch(data);
    }
    queryAPI();
  },[search]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Form
          setSavedSearch={setSavedSearch}
        />
      </div>
    </div>
  );
}

export default App;
