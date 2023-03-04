import { Routes, Route } from "react-router-dom";
//Pages
import SearchPage from './pages/SearchPage';
import NoMatch from './pages/NoMatch';

const App =  () => {
  return (
    <Routes>
      <Route path = "/" element = {<SearchPage/>}/>
      <Route path ='*' element = {<NoMatch/>}/>
    </Routes>  
  );
}

export default App;
