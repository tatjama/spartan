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
      <Route path = "/bash_script" render = {() => (window.location ="./downloads/bash_script.txt")} />
    </Routes>  
  );
}

export default App;