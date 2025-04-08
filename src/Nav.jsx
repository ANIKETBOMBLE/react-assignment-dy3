import React from "react";

function Nav() {
	return (
		<>
	  <nav className="flex justify-around items-center bg-gray-900 p-3 fixed w-full top-0 z-10">
	  <div className="logo-div flex items-center gap-2">
	  <span className=""><img src="https://flowbite.com/docs/images/logo.svg" alt="" /></span>
	  <h2 className="text-2xl font-semibold cursor-pointer text-white">GeekFoods</h2></div>	
		  
		<ul className="flex gap-15 text-white font-medium  " >
		  <li><a href="#home " className="hover:text-sky-500">Home</a></li>
		  <li><a href="#about" className="hover:text-sky-500">Quotet</a></li>
		  <li><a href="#services" className="hover:text-sky-500">Foods</a></li>
		  <li><a href="#services" className="hover:text-sky-500">Resturants</a></li>
		  <li><a href="#contact"className="hover:text-sky-500" >Contact</a></li>
		</ul>
		<div className="nav-btn">
		  <button className="btn w-32 p-2 rounded text-white bg-blue-700 font-medium hover:bg-blue-800 ">Get Started</button>
		</div>
	    
	  </nav>
	  
	  </>
	);
}

export default Nav;