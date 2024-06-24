import {
  CircleHelp,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  SquareArrowDown,
  Tag,
  Truck,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      {/* leftside */}
      <div className="flex items-center  ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer  ">
          <Menu size={30} />
        </div>
        <h1 className=" text-3xl sm:text-4xl lg:text-4xl px-2  ">
          Best <span className=" font-bold">Eats</span>
        </h1>
        <div className=" hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
          <p className=" bg-black text-white rounded-full p-2  ">Delivery</p>
          <p className="p-2">PickUp</p>
        </div>
      </div>

      {/* search-input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]  ">
        <Search size={20} />
        <input
          className=" bg-transparent p-2 w-full focus:outline-none  "
          type="text"
          placeholder="Search ur damn food "
        />
      </div>

      {/* card */}
      <button className=" bg-black text-white hidden md:flex items-center py-2 rounded-full ">
        <ShoppingCart className="mr-2" /> Cart
      </button>

      {/* mobile menu */}
      {/* overlay */}
      {/* {nav ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-700 "></div>
      ) : (
        ""
      )} */}

      {/* slide drawer menu */}
      <div
        className={
          nav
            ? " fixed top-0 left-0 w-[300px] h-screen bg-gray-100 z-10 duration-300 shadow-xl "
            : " fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500 "
        }
      >
        <X onClick={()=> setNav(!nav)} size={30} className=" absolute right-4 top-4 cursor-pointer " />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col py-4 text-gray-800 ">
            <li className="text-xl py-4 flex">
              <Truck size={25} className="mr-4 ml-4 " />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <Heart size={25} className="mr-4 ml-4 " />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <Wallet size={25} className="mr-4 ml-4 " />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <CircleHelp size={25} className="mr-4 ml-4 " />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <Tag size={25} className="mr-4 ml-4 " />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <SquareArrowDown size={25} className="mr-4 ml-4 " />
              Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <Users size={25} className="mr-4 ml-4 " />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
