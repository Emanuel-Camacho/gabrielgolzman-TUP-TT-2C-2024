// Books.jsx
import React from 'react';
import BookItem from './bookItem/BookItem';

const Books = ({ books }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {books.map((book, index) => (
                <BookItem
                    key={index}
                    title={book.bookTitle}
                    author={book.bookAuthor}
                    rating={book.bookRating}
                    pageCount={book.pageCount}
                    imageUrl={book.imageUrl}
                />
            ))}
        </div>
    );
};

export default Books;
