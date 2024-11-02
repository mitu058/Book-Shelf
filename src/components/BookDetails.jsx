import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "./utilities/MarkAsRead";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const{image,bookName,category, author,review,tags,totalPages,publisher,yearOfPublishing,rating} = book;

  const handelMarkAsRead = (id) =>{
    addToStoredReadList(id)
  
  }

  // const handelWishList = (id) =>{
  //   addToStoredWishList(id)
  // }

  return (
    <div>
      <div className="hero bg-base-200 my-16">
        <div className="hero-content flex-col lg:flex-row">
          <img 
            src={image}
            className="max-w-md rounded-lg shadow-2xl "
          />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <h1>By:{author}</h1>
            <div>
                <h2>{category}</h2>
            </div>
            <p className="py-6">reviw: <span>{review}</span> </p>
            <div className="border-b-2 my-4">
            <h2>Tag : <span className="">{tags}</span></h2>
            </div>
            <div>
                <p>Number of page : {totalPages}</p>
                <p>Publisher : {publisher}</p>
                <p>Year of Publishing : {yearOfPublishing}</p>
                <p>Rating : {rating}</p>
            </div>
            <div className="space-x-5">
        
            <button onClick={() => handelMarkAsRead(bookId)} className="btn btn-primary">Mark As Read</button>
            {/* <button onClick={() => handelWishList(bookId)} className="btn btn-primary">Wishlist</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
