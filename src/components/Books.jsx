import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json()
    .then(data => setBooks(data)))
    },[])
    return (
        <div className="">
         <h2 className="text-4xl text-center">Books</h2>  
         <div className="grid lg:grid-cols-3 gap-6">
            {
                books.map(book => <Book book={book}></Book>)
            }
         </div>
        </div>
    );
};

export default Books;