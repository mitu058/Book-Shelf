const Book = ({ book }) => {
  const { bookName ,author,image} = book;
  return (
    <div >
      <div className="card bg-base-100 w-96  my-6 p-6 border-2">
        <figure className="bg-blue-50 py-8 rounded-2xl">
          <img className="h-[166px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-actions justify-start pt-8">
            <div className="badge badge-outline">Young Adult</div>
            <div className="badge badge-outline">Identity</div>
          </div>
        <div className="card-body">
          <h2 className="card-title">
          {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{author}</p>
        
        </div>
      </div>
    </div>
  );
};

export default Book;
