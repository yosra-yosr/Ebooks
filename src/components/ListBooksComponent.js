import React, { useState } from 'react';
import AddBookComponent from './AddBookComponent';
import EditBookComponent from './EditBookComponent';

function ListBooksComponent() {
    const [books, setBooks] = useState([]);
    const [showAddBook, setShowAddBook] = useState(false);
    const [editingBook, setEditingBook] = useState(null);

    const addBook = (book) => {
        setBooks([...books, { ...book, id: books.length + 1 }]);
        setShowAddBook(false);
    };

    const updateBook = (updatedBook) => {
        setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
        setEditingBook(null);
    };

    const deleteBook = (id) => {
        const bookToDelete = books.find((book) => book.id === id);
        if (bookToDelete && window.confirm(`Êtes-vous sûr de vouloir supprimer le livre "${bookToDelete.title}" ?`)) {
            setBooks(books.filter((book) => book.id !== id));
        }
    };
    

    return (
        <div>
            {showAddBook ? (
                <AddBookComponent addBook={addBook} />
            ) : editingBook ? (
                <EditBookComponent book={editingBook} updateBook={updateBook} />
            ) : (
                <>
                    <h1><center>Application de gestion des livres electroniques :</center></h1>
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => setShowAddBook(true)}
                    >
                        Ajouter un livre
                    </button>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Titre</th>
                                <th>Auteur</th>
                                <th>Editer</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={book.id}>
                                    <td>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => setEditingBook(book)}
                                        >
                                            Editer
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteBook(book.id)}
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

export default ListBooksComponent;
