import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ImagesList from './components/ImagesList';

function App() {

  // state de la App
  const [search, setSavedSearch] = useState('');
  const [images, setSavedImages] = useState([]);
  // state para paginador
  const [currentPage, setSavedCurrentPage] = useState(1);
  const [totalPages, setSavedTotalPages] = useState(1);

  useEffect(() => {
    // no ejecutar la primera vez
    if(search === '') return null;

    const queryAPI = async () => {
      const imagesPerPage = 12;
      const key = '19487238-bd77e2c83db394142ecd7b5d1';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;

      const response = await fetch(url);
      const data = await response.json();

      setSavedImages(data.hits);

      // calcular el total de paginas
      const calculateTotalPages = Math.ceil(data.totalHits / imagesPerPage);
      setSavedTotalPages(calculateTotalPages);
    }
    queryAPI();
  },[search]);

  // pagina anterior
  const handlePreviousPage = e => {
    const newCurrentPage = currentPage - 1;

    if(newCurrentPage === 0) return;
    setSavedCurrentPage(newCurrentPage);
  }

  const handleNextPage = e => {
    const newCurrentPage = currentPage + 1;

    if(newCurrentPage > totalPages) return;
    setSavedCurrentPage(newCurrentPage);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Form
          setSavedSearch={setSavedSearch}
        />
      </div>

      <div className="row justify-content-center">
        <ImagesList
          images={images}
        />

        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={handlePreviousPage}
        >&laquo; Anterior </button>

        <button
          type="button"
          className="btn btn-info"
          onClick={handleNextPage}
        >Siguiente &raquo;</button>
      </div>
    </div>
  );
}

export default App;
