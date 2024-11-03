
import bannerImg from '../assets/books.jpg'
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse my-16 gap-32">
          <img 
            src={bannerImg}
            className="max-w-lg rounded-lg "
          />
          <div className='space-y-8'>
            <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
           <p className='text-lg font-semibold'>Discover new reads that add excitement, inspiration <br /> and diversity  to your collection. Perfect for updating <br />your bookshelf  with fresh  stories, ideas, and perspectives.</p>
            <button className="btn bg-[#23BE0A] text-white font-bold">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
