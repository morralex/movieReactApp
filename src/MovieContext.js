import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

 export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Resevoir Dogs',
            price: '$10',
            id: 23124
        },
        {
            name: 'Pulp Fiction',
            price: '$10',
            id: 52370
        },
        {
            name: 'Game of Thrones',
            price: '$45',
            id: 77632
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
 }