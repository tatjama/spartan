import { MagnifyingGlass } from 'react-loader-spinner';
import { LoadingStyles } from './LoadingStyles';

const Searching = () => {
    return(
      <LoadingStyles>
        <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#c0efff'
        color = '#e15b64'
        />
      </LoadingStyles>
    )
}

export default Searching