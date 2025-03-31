import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Signup from './screens/Signup';
import LogIn from './screens/LogIn';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/signup' element={<Signup></Signup>}></Route>
         <Route path='/login' element={<LogIn></LogIn>}></Route>
       </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
