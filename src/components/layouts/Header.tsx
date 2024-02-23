/* eslint-disable @typescript-eslint/no-unused-vars */
import { Moon, ShoppingCart, Sun } from "lucide-react";
import EmaJohn from "../../assets/ema-jogn-logo.png";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Header = () => {
  return (
    <header className="bg-[#1c2b35] text-white">
      <nav className="container flex items-center justify-between space-x-10 py-4 ">
        <Link to={"/"}>
          <img src={EmaJohn} alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className=" rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/products"}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              className=" rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <Link
              className=" rounded-lg backdrop-blur-[2px] p-1 inline-block"
              to={"/cart"}
            >
              {/* <img src={ring} width="24" height="24" alt="" /> */}
              <ShoppingCart size={24} />
            </Link>
          </li>

          <li>
            <a
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              {/* <img
                  src={darkMode ? sun : moon}
                  width="24"
                  height="24"
                  alt=""
                /> */}
              <Moon size={24} />
              {/* <Sun/> */}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
