import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/header/NavBar';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
