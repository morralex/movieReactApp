import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    };
    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const addMovie = e => {
        e.preventDefault();
        setMovies(previousMovies => [...previousMovies, { name: name, price: price }])
    }

    return (
        <form onSubmit={addMovie}>
            <label>
                Title:
                <input type="text" name="name" value={name} onChange={updateName} />
            </label>
            <label>
                Price:
            <input type="text" name="price" value={price} onChange={updatePrice} />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;