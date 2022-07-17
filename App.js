import logo from './logo.svg';
import './App.css';
import A from './componant/Axios'
import Create from './componant/Create'
import Home from './componant/Home';
import Update from './componant/Update'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from './componant/Register';
import Login from './componant/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/A" element={<A/>} />
          <Route path="Home" element={<Home/>}></Route>
          <Route path="Update" element={<Update/>}></Route>
        </Routes>
      </Router>
     
    
    </div>
  );
}

export default App;
