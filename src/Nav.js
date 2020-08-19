import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav className="navbar navbar-dark bg-primary text-center">
            <h3>Dev Alex</h3>
            <p>List of Movies: {movies.length}</p>
        </nav>
    )


}

export default Nav;