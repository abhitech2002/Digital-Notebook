import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const BooksPage = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book of Shadows", notes: [] }
  ]);
  const [form, setForm] = useState({ title: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAddBook = (e) => {
    e.preventDefault();
    setBooks([...books, { id: Date.now(), title: form.title, notes: [] }]);
    setForm({ title: "" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 pt-24 pb-16">
        <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 bg-clip-text tracking-widest drop-shadow-lg text-center">
          Your Ancient Books
        </h1>
        <form onSubmit={handleAddBook} className="mb-8 flex gap-2">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Book title..."
            className="px-4 py-2 rounded-lg border border-yellow-700 bg-white/40 font-bold text-lg"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Add Book
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {books.map((book) => (
            <div
              key={book.id}
              className="cursor-pointer bg-gradient-to-b from-yellow-50/90 via-yellow-100/95 to-yellow-200/90 border-x-8 border-yellow-900 rounded-3xl shadow-xl p-6 flex flex-col items-center"
              onClick={() => navigate(`/books/${book.id}`)}
            >
              <h2 className="text-2xl font-bold mb-2 text-yellow-900">{book.title}</h2>
              <span className="text-yellow-800">{book.notes.length} scrolls</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BooksPage;