import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// For demo: Replace this with global state or context for real apps
const demoBooks = [
  {
    id: 1,
    title: "Book of Shadows",
    notes: [
      { id: 1, title: "First Spell", content: "This is the first spell." }
    ]
  }
];

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // In real app, fetch the book by id from global state or backend
  const [book, setBook] = useState(
    demoBooks.find((b) => b.id === Number(id)) || { title: "", notes: [] }
  );
  const [form, setForm] = useState({ title: "", content: "" });
  const [editingNote, setEditingNote] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      setBook({
        ...book,
        notes: book.notes.map((n) =>
          n.id === editingNote.id ? { ...editingNote, ...form } : n
        ),
      });
      setEditingNote(null);
    } else {
      setBook({
        ...book,
        notes: [...book.notes, { id: Date.now(), ...form }],
      });
    }
    setForm({ title: "", content: "" });
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setForm({ title: note.title, content: note.content });
  };

  const handleDelete = (id) => {
    setBook({ ...book, notes: book.notes.filter((n) => n.id !== id) });
    if (editingNote && editingNote.id === id) {
      setEditingNote(null);
      setForm({ title: "", content: "" });
    }
  };

  const handleCancel = () => {
    setEditingNote(null);
    setForm({ title: "", content: "" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 pt-24 pb-16">
        <div className="flex-1 flex flex-col items-center px-4">
          <button
            onClick={() => navigate("/books")}
            className="mb-4 px-4 py-2 bg-indigo-200 rounded-full text-indigo-900 font-semibold hover:bg-indigo-300 transition"
          >
            ← Back to Books
          </button>
          <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 bg-clip-text tracking-widest drop-shadow-lg text-center">
            {book.title}
          </h1>
          {/* Note Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mb-8 bg-gradient-to-b from-yellow-50/90 via-yellow-100/95 to-yellow-200/90 border-x-8 border-yellow-900 rounded-t-3xl rounded-b-3xl shadow-2xl py-8 px-6 flex flex-col gap-4"
            style={{
              fontFamily: "serif",
              backgroundImage:
                "repeating-linear-gradient(0deg,rgba(120,80,20,0.06),rgba(120,80,20,0.06) 1px,transparent 1px,transparent 32px)",
            }}
          >
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Scroll title..."
              className="px-4 py-2 rounded-lg border border-yellow-700 bg-white/40 font-bold text-lg"
              required
            />
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Inscribe your ancient wisdom..."
              className="px-4 py-2 rounded-lg border border-yellow-700 bg-white/40 min-h-[80px]"
              required
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                {editingNote ? "Update Scroll" : "Add Scroll"}
              </button>
              {editingNote && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold shadow hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
          {/* Notes List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {book.notes.map((note) => (
              <div
                key={note.id}
                className="relative bg-gradient-to-b from-yellow-50/90 via-yellow-100/95 to-yellow-200/90 border-x-8 border-yellow-900 rounded-t-3xl rounded-b-3xl shadow-xl p-6 flex flex-col"
                style={{
                  fontFamily: "serif",
                  backgroundImage:
                    "repeating-linear-gradient(0deg,rgba(120,80,20,0.06),rgba(120,80,20,0.06) 1px,transparent 1px,transparent 32px)",
                }}
              >
                <h2 className="text-2xl font-bold mb-2 text-yellow-900">{note.title}</h2>
                <p className="text-yellow-800 flex-1 whitespace-pre-line">{note.content}</p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(note)}
                    className="px-4 py-1 bg-indigo-400 text-white rounded-full font-semibold shadow hover:bg-indigo-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="px-4 py-1 bg-pink-400 text-white rounded-full font-semibold shadow hover:bg-pink-500 transition"
                  >
                    Delete
                  </button>
                </div>
                {/* Decorative scroll edge */}
                <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-b from-yellow-200/80 to-yellow-400/80 rounded-l-3xl blur-[2px] opacity-40 pointer-events-none" />
                <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-b from-yellow-200/80 to-yellow-400/80 rounded-r-3xl blur-[2px] opacity-40 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookDetailPage;