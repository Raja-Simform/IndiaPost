import { Link } from "react-router-dom";

export default function Navbar(){
   return(
    <header className="flex  items-center  justify-around  gap-12 bg-blue-600 p-8  text-xl  text-white">
     <h2 className="text-3xl">IndianPost</h2>
      <nav className="flex gap-8">
        <Link to="/" className="hover:underline" >Home</Link>
        <Link to="/browse" className="hover:underline">Search By Pincode</Link>
        <Link to="/random" className="hover:underline">Search By BranchName</Link>  
      </nav> 
      <a href="#" download={"http://www.postalpincode.in/Api-Details"}>
      <button className=" border-1 text-lg  py-1 px-3 rounded-3xl bg-orange-500  hover:bg">Api Docs</button>
      </a>      
  </header>
   )
}