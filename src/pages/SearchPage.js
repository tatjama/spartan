import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//components
import { Button, SearchBar, Select, Movie, Searching, Pagination } from "../components";
//utils
import { typesList, yearsList} from "../utils/constants";
//styles
import { SearchPageStyles } from "./SearchPageStyles.js";
//hooks
import { useHttp } from '../hooks/useHttp';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [movie, setMovie] = useState(null);

    const { isLoading, error, fetching} = useHttp();
    const navigate = useNavigate();
    useEffect(() => {
        const body = {
            query: query,
            type: type,
            year: year,
            page: 1
        }           
        setPage(1)
        setMovies([]);   
        fetching( setMovies, body);
    },[ query, type, year, fetching ])

    const handlePageClick = (e) => {
        setPage(e.target.id);
        const body = {
            query: query,
            type: type,
            year: year,
            page: e.target.id
        }           
        
//        setMovies([]);   
        fetching( setMovies, body);
    }

    useEffect(() => {
        navigate(`/search/${page}`, {replace: true})
    }, [navigate, page])
    
    const handleClickMovie = (e) => {
        const body = {
            i: e.currentTarget.id
        }
        fetching( setMovie, body);
    }

    return(
        <SearchPageStyles>
            <nav><h2>OMDb API</h2> <Button handleOnClick={() => navigate('/', {replace: true})} text='to Home'/> </nav>            
            <header>
                <SearchBar setQuery = {setQuery} />
                <div className="selectContainer">
                    <Select optionsList = {typesList} setOption = {setType} name = "types"/>
                    <Select optionsList = {yearsList()} setOption = {setYear} name = "years"/>
                </div>
            </header>         
            <div className = "listMovies">
                <p className = "error">{error}</p> 
                <Pagination movies = {movies} handlePageClick = {handlePageClick} nextPage = {page}/>
                {isLoading && <Searching/>}            
                {movies.Search && movies.Search.map(movie => <Movie 
                                                    key = {movie.imdbID} 
                                                    movie = {movie}
                                                    handleClickMovie = {handleClickMovie} 
                                                    />)}
                <Pagination movies = {movies} handlePageClick = {handlePageClick} nextPage = {page}/>                
            </div>
            {movie && <div className="background">
                        <div className="close" onClick ={ () => setMovie(null) }>
                            <h1>x</h1>
                        </div>
                        <div className="module"> 
                            <Movie movie = {movie} />
                        </div>
                    </div>}
        </SearchPageStyles>
    )
}

export default SearchPage