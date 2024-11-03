
import facebook from '../assets/icon/facebook.png'
import twitter from '../assets/icon/tweeter2.png'
import instagram from '../assets/icon/instagram.png'
import youtube from '../assets/icon/youtube logo.png'

const Footer = () => {
    return (
        <div>
         
  <footer className="bg-[#06091A] mt-28">
    <div className="container mx-auto flex justify-around md:flex-row lg:flex-row flex-col gap-10  py-28 px-4">
      
          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
                  <h1 className="text-white text-2xl font-bold">Books Shelf</h1>
              </div>
                  <div className="text-white text-base font-semibold">
                      <p>Location: av. Washington 165, NY CA 54003</p>
                         <p> Phone: +31 85 964 47 25</p>
                          <p>Email: info@yourdomain.com</p>
                          <p>Openings hours: 9.00 AM - 5.00 PM</p>
                  </div>
          
                  <div className="flex space-x-3 pt-3">
                      <img className="w-6 h-6" src={facebook} alt=""/>
                      <img className="w-6 h-6" src={twitter} alt=""/>
                      <img className="w-6 h-6" src={instagram} alt=""/>
                      <img className="w-6 h-6" src={youtube} alt=""/>
                  </div>
         </div>
      
             <div className="text-white">
                <h1 className="font-bold text-lg pb-5">Useful Links</h1>
                <ul className="space-y-2">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Foundation</li>
                    <li>Contact</li>
                </ul>
             </div>
             
              <div className="space-y-3">
                <h1 className="text-white text-lg font-bold">Drop a Message</h1>
                <input className="py-2 px-4  rounded-lg" type="text" placeholder="Enter Your Email"/>
                <div><button className="py-2 px-16 bg-[#50B1C9] text-white rounded-lg font-semibold">Subscriber</button></div>
              </div>
        
      </div>
  </footer> 
        </div>
    );
};

export default Footer;