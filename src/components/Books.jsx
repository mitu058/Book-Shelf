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
        <div className="mt-14">
         <h2 className="text-4xl text-center font-bold">Available Books</h2>  
         <div className="grid lg:grid-cols-3 gap-6 my-10">
            {
                books.map(book => <Book book={book}></Book>)
            }
         </div>
         
        </div>
    );
};

export default Books;