import React from "react";

function Section2() {
	return (
		<>
		 <section className="flex justify-between items-center p-20 0 bg-white text-start relative " >  
			<div className="left-div ">
				<img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className="w-350 h-180" />
			</div>
			<div className="right-div flex flex-col gap-5 p-10 ">
				<p className="font-black text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Explicabo beatae vitae nobis.</p>
				<p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nesciunt voluptates voluptatibus, veniam quos exercitationem amet explicabo  <br />Lorem ipsum dolor sit amet. voluptatum dolorem vitae.</p>
				<button className=" border-2  w-38 text-center p-2 rounded bg-blue-700 text-white font-medium cursor-pointer hover:border-blue-700 hover:bg-white hover:text-blue-700">Get in Touch</button>
			</div>
		 </section>
		  </>
		);
}
export default Section2;