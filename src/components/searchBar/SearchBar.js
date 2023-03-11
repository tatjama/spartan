import  { useRef } from 'react';
import { SearchBarStyles } from "./SearchBarStyles";

const SearchBar = ({setQuery}) => {

    const timeout = useRef();

    const handleChange = (e) => {
        //Clear the previous timeout.
        clearTimeout(timeout.current)

        const searchQuery = e.target.value.trim();
        //Debounce search
        timeout.current = setTimeout(() =>{
            searchQuery && setQuery(searchQuery);
        }, 600)
    }

    const handleClick = (e) => {
        e.target.value = '';
        setQuery('');
    }

    return(
        <SearchBarStyles className= "search">            
            <input type="text" placeholder="title" onClick = {handleClick} onChange = {handleChange}/>
            <i className="fa fa-search"></i>
        </SearchBarStyles>
    )
}

export default SearchBar;