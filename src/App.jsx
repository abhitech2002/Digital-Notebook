import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartPage from './pages/StartPage'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
