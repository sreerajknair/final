import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div >
    <Router>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Signup' element={<Signup/>}></Route>
     </Routes>
    </Router>
    </div>
  );
}

export default App;
