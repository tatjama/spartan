//styles
import { LoadingStyles } from '../components/loaders/LoadingStyles';
//components
import  Commenting  from '../components/loaders/Commenting';

const NoMatch = () => {
    return(
        <LoadingStyles>
          <Commenting/>
          <div>
            <h2>oops!</h2>
            <p>the page doesn't seem to exist </p>
          </div>
        </LoadingStyles>
    )
}

export default NoMatch;