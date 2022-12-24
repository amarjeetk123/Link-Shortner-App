import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <BackgroundAnimation />
      <Routes>
        <Route path='/'  element={<HomePage />} />
      </Routes>
      
      
    </BrowserRouter>

  );
}

export default App;
