import { Link } from "react-router-dom";

export default function Navbar(){
   return(
    <header className=" flex  items-center  mx-auto  justify-around  gap-12 bg-blue-600 p-8  text-xl  text-white">
      <div className="flex"><img src="india-post-seeklogo.png" alt="" className=" h-10 w-10" />
      <h2 className="text-3xl">IndiaPost</h2></div>
      <nav className="sm:flex gap-8 p-1 sm:flex-col md:flex-row hidden  "  >
        <Link to="/" className="hover:text-amber-500" >Home</Link>
        <Link to="/pincodesearch" className="hover:text-amber-500">Search By Pincode</Link>
        <Link to="/branchsearch" className="hover:text-amber-500">Search By BranchName</Link>  
      </nav> 
      <a href="#" download={"http://www.postalpincode.in/Api-Details"}>
      <button className=" border-1 text-lg  py-1 px-3 rounded-3xl bg-orange-500  cursor-pointer hover:bg-amber-950">Api Docs</button>
      </a>      
  </header>
   )
}
