import { Link } from "react-router-dom";
import HeroImg from "../assets/Hero.jpg";
const Home = () => {
  return (
    <div className="container h-full my-10 ">
      <div className="flex md:flex-row flex-col-reverse justify-between items-center">
        <div>
          <small className="text-xs text-primary mb-10 block">
            Sale up to 70% off
          </small>
          <h1 className="text-6xl font-bold mb-4">New Collection For Fall</h1>
          <p className="text-sm mb-10">
            Discover all the new arrivals of ready-to-wear collection.
          </p>

          <Link to={"/products"} className=" px-4 py-2 bg-primary rounded-md">
            SHOP NOW
          </Link>
        </div>
        <div>
          <img className="w-96 mx-auto md:mb-0 mb-10" src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
