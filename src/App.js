import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navabar from './Components/Navbar';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Courses  from './Pages/Courses.jsx';
import Teachers from './Pages/Teachers.jsx';
import Contact from './Pages/Contact.jsx';
function App() {
  return (
    <BrowserRouter>
      <Navabar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/teachers' element={<Teachers/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;