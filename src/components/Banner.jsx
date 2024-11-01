
import bannerImg from '../assets/books.jpg'
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse my-20 gap-32">
          <img 
            src={bannerImg}
            className="max-w-lg rounded-lg "
          />
          <div className='space-y-12'>
            <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
           
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
