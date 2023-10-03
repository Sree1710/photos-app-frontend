import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPhoto from './Components/AddPhoto';
import SearchPhoto from './Components/SearchPhoto';
import ViewPhoto from './Components/ViewPhoto';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AddPhoto/>}/>
        <Route path='/searchp' exact element={<SearchPhoto/>}/>
        <Route path='/viewp' exact element={<ViewPhoto/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
