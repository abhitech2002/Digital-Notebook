import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartPage from './pages/StartPage'
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/home' element={<HomePage />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
