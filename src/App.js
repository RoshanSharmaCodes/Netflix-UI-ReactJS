import './App.css';
import Login from './Components/Login/login';
import Homepage from './Components/Homepage/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Popup from './Components/StaticPopUp/popup.jsx';
function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Homepage/>}/>
    <Route path="/Home/Popup" element={<Popup/>}/>
    <Route path="/Popup" element={<Popup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
