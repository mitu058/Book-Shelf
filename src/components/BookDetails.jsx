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

  const handelWishList = (id) =>{
    addToStoredWishList(id)
  }

  return (
    <div>
      <div className="hero  my-10">
        <div className="hero-content flex- gap-16 lg:flex-row">
          <img 
            src={image}
            className="w-[450px] bg-base-200   p-14 rounded-xl"
          />
          <div className="">
            <h1 className="text-4xl font-bold">{bookName}</h1>
            <h1 className="text-base font-bold opacity-80 py-3">By : {author}</h1>
            <div className="border-t-2 border-b-2 py-2 text-lg font-semibold">
                <h2>{category}</h2>
            </div>
         
          <p className="py-3 "><span className="font-bold">reviw : </span>  <span>{review}</span></p>
          
          

            <div className="border-b-2 my-4">
            <div className="flex space-x-6 my-6">
              <p className="text-base font-bold">Tags: </p>
            {
                tags.map(tag => <button className="btn btn-sm bg-green-50 text-[#23BE0A]">{tag}</button>)
            }
          </div>

            </div>
            <div className="space-y-3 font-semibold opacity-80">
                <p>Number of page : {totalPages}</p>
                <p>Publisher : {publisher}</p>
                <p>Year of Publishing : {yearOfPublishing}</p>
                <p>Rating : {rating}</p>
            </div>
            <div className="space-x-5 pt-4">
        
            <button onClick={() => handelMarkAsRead(bookId)} className="btn bg-[#23BE0A] text-white font-bold">Mark As Read</button>
            <button onClick={() => handelWishList(bookId)} className="btn text-white font-bold bg-[#50B1C9]">Wishlist</button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
