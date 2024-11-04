import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    category,
    totalPages,
    rating,
  } = book;
  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96  my-2 p-6 border-2">
          <figure className="bg-gray-100 py-8 rounded-2xl ">
            <img className="h-[166px]" src={image} alt={bookName} />
          </figure>
          <div className="flex space-x-6 mt-6">
            {tags.map((tag) => (
              <button className="btn btn-sm bg-green-50 text-[#23BE0A]">
                {tag}
              </button>
            ))}
          </div>
          <div className="py-4 space-y-2 border-b-2 border-dashed">
            <h2 className="card-title">
              {bookName}
             
            </h2>
            <p>By : {author}</p>
          </div>
          <div className="card-actions justify-between pt-5">
            <div className="btn btn-sm  bg-[#23BE0A] text-white">
              <button>Viwe Details</button>
            </div>
           <div className="flex space-x-3  items-center justify-items-center">
           <div className="text-xl">{rating}</div>
            {/* <div>{totalPages}</div> */}
            <div className="rating rating-md">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  
</div>
           </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
