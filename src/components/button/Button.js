import { useNavigate } from 'react-router-dom';
//styles
import { ButtonStyles } from './ButtonStyles';

const Button = ({urlPath, text}) => {
    const navigate = useNavigate();
   
    return(
        <ButtonStyles>
            <button type="button" onClick={() => navigate(urlPath, {replace: true})}>{text}</button>
        </ButtonStyles>
    )
}

export default Button;