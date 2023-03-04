import { Routes, Route } from "react-router-dom";
//Pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import NoMatch from './pages/NoMatch';

const App =  () => {
  return (
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/search" element = {<SearchPage/>}/>
      <Route path = "/search/:id" element = {<SearchPage/>}/>
      <Route path ='*' element = {<NoMatch/>}/>
    </Routes>  
  );
}

export default App;