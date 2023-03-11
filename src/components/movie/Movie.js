//styles
import { MovieStyles } from './MovieStyles';

const Movie = ({movie, handleClickMovie}) => {
    return(
        <MovieStyles id = {movie.imdbID} onClick = { handleClickMovie}>            
            <article>
                <h1>{movie.Title}</h1>
                <p><span> Year: </span> {movie.Year}</p>
                <p><span> Type: </span>{movie.Type}</p>
                <p><span> Description: </span>{movie.Plot}</p>
            </article>
            <div className="imgContainer">
                {
                    movie.Poster !== "N/A" 
                    ? <img src={movie.Poster} alt="poster" /> 
                    : <i className="fa-solid fa-image"></i>
                }
            </div>            
        </MovieStyles>
    )
}

export default Movie;