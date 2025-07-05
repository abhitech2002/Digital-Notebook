import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartPage from './pages/StartPage'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotesPage from './pages/NotesPage';
import BookPage from './pages/BookPage';
import BookDetailPage from './pages/BookDetailPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/notes' element={<NotesPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/books' element={<BookPage />} />
          <Route path='/books/:id' element={<BookDetailPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
