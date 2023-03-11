import { useNavigate } from 'react-router-dom';

import { Button } from '../components/';
import { HomePageStyles } from './HomePageStyles';

const Home = () => {
  const navigate = useNavigate();

  return(
      <HomePageStyles>
        
        <li>
          <h3>React</h3>          
          <Button handleOnClick={() => navigate('/search', {replace: true})} text='to Search'/>
        </li>
              
      </HomePageStyles>                          
    )
}

export default Home;