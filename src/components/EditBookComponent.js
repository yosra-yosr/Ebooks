import React, { useState, useEffect } from 'react';

function EditBookComponent({ book, updateBook }) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);

    useEffect(() => {
        setTitle(book.title);
        setAuthor(book.author);
    }, [book]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            updateBook({ ...book, title, author });
        }
    };

    return (
        <>
            <h1>Editer le livre</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Auteur</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Editer </button>
            </form>
        </>
    );
}

export default EditBookComponent;
