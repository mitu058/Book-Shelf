import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName ,author,image,tags,category,totalPages,rating} = book;
  return (
    <div >
     <Link to={`/books/${bookId}`}>
     <div className="card bg-base-100 w-96  my-6 p-6 border-2">
        <figure className="bg-blue-50 py-8 rounded-2xl ">
          <img className="h-[166px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        {/* <div className="card-actions justify-start pt-8">
            <div className="badge badge-outline">Young Adult</div>
            <div className="badge badge-outline">Identity</div>
          </div> */}
          <div className="flex space-x-6 mt-6">
            {
                tags.map(tag => <button className="btn btn-sm bg-green-50 text-[#23BE0A]">{tag}</button>)
            }
          </div>
        <div className="card-body border-b-2 border-dashed">
          <h2 className="card-title">
          {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
        </div>
        <div className="card-actions justify-between pt-8">
            <div className="badge badge-outline">{category}</div>
            <div>{rating}</div>
            <div>{totalPages}</div>
            <div className="rating">
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
     </Link>
    </div>
  );
};

export default Book;
