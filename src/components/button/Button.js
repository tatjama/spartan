//styles
import { ButtonStyles } from './ButtonStyles';

const Button = ({handleOnClick, text}) => {
   
    return(
        <ButtonStyles>
            <button type="button" onClick={handleOnClick}>{text}</button>
        </ButtonStyles>
    )
}

export default Button;