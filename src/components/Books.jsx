import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Books = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json()
    .then(data => setBooks(data)))
    },[])
    return (
        <div className="text-center">
         <h2 className="text-4xl">Books</h2>  
         <p>Total Books : {books.length}</p> 
        </div>
    );
};

export default Books;