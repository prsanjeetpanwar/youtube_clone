import React from "react";
import { AiOutlineSearch, AiOutlineCiCircle, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {BiSolidUserRectangle} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div
      className="flex justify-between
    items-center  px-14 h-14 bg-[#212121]
    opacity-95 sticky top-0 z-50
    
    
    "
    >
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu className="text-white" />
        </div>
        <Link to="/">
          <div
            className="flex gap-1
    items-center justify-center "
          >
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium text-white ">Youtube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form action="">
          <div
            className="flex bg-zinc-900 items-center h-10 px-4 pr-0
        "
          >
            <div
              className="flex gap-4 items-center pr-5 rounded-50">

<div>

  <AiOutlineSearch className="text-xl text-white"/>

</div>
<input type="text"
placeholder="Search"
 className="w-97 text-white bg-zinc-900 focus:outline-none border-none"
/>

<AiOutlineClose className={`text-xl cursor-pointer
 text-white
`}/>
      </div>
      <button className="h-10 w-16 flex items-center
      justify-center bg-zinc-800">

        <AiOutlineSearch className="text-xl text-white"/>
      </button>

          </div>
        </form>

       <div className="text-xl p-3 bg-zinc-900 rounded-full">
        <TiMicrophone className="text-white"/>
        </div> 
      </div>

      <div className="flex gap-5 items-center text-xl">

        <BsCameraVideo className="text-white"/>
        <IoAppsSharp className="text-white"/>
        <div className="relative color-white">
          <BsBell className="text-white"/>
          <span className="absolute bottom-2
          left-2 text-xs  bg-red-600 rounded-full  px-1">5+</span>
        </div>

        <BiSolidUserRectangle
        className="w-9 h-9 rounded-full text-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
