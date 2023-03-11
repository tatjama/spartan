import { SelectStyles } from './SelectStyles';

const Select = ({ optionsList, setOption, name }) => {
  
    const handleFocus = (e) => {
        e.target.value = [];
        setOption([]);
    }

    const handleChange = (e) => {
        setOption(e.target.value);
    }    
      
    return(
        <SelectStyles 
            id = {name} 
            name = {name}
            onFocus = { handleFocus }
            onChange = {handleChange}
            required
        >
            <option  value="">All {name}</option>
                {
                   optionsList.map(item =>{ 
                        return <option 
                                    id = {item} 
                                    key = {item} 
                                    value={item}
                                    selected = {item.selected}
                                 >{item}</option>
                             })}
        </SelectStyles>
    )
}

export default Select;