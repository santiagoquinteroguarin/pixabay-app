import React, { useState } from 'react';
import Error from './Error';

const Form = ({setSavedSearch}) => {

    const [term, setSavedTerm] = useState('');
    const [error, setSavedError] = useState(false);

    const handleSearchImages = e => {
        e.preventDefault();

        // validation
        if(term.trim() === '') {
            setSavedError(true);
            return;
        }

        setSavedError(false);

        // enviar el termino de busqueda al componente principal
        setSavedSearch(term);
    }

    return (
        <form onSubmit={handleSearchImages}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: futbol o café"
                        onChange={e => setSavedTerm(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>

            {error ? <Error message="Agrega un término de búsqueda"/> : null}
        </form>
    );
}

export default Form;