import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';
import Home from './ClientApp/containers/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>   
  );
}

export default App;
