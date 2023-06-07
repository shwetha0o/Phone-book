
import React, {useRef} from 'react';
import AddIcon from './add.png'
import {useNavigate , Link} from 'react-router-dom'
import Logo from './logo.png'
import index from './style.css/index.css'



const Home=(props) => {



    const navigate = useNavigate();
    const inputEl = useRef("")

    const getSearchTerm = () => {
      console.log(inputEl.current.value)
      props.searchKeyword(inputEl.current.value);
    };

    return(

    <>
    <header className="sticky top-0 bg-white z-10">
      <div className="flex flex-col sm:flex-row sm:items-center pr-4 justify-between max-w-[1440px] m-auto">

        <Link to={"/"} className="flex px-8 py-3 items-center gap-3">
          <img src={Logo} className="w-10 h-10" />
          <span className="text-[#5f6368] text-xl">Phonebook</span>
        </Link>
        
      <div className="px-8">
            {/* <div className="mx-auto mt-1"> */}
            <form
            className="bg-[#f1f3f4] focus-within:bg-white focus-within:shadow-md transition-all duration-500 ease-in-out flex items-center rounded-lg px-5 gap-5 relative">
                <input 
                ref ={inputEl}
                value={props.term}
                onChange={getSearchTerm}
                className="bg-transparent py-2 text-lg focus:outline-none"
                type="text" 
                placeholder="Search"
                // style={{maxWidth:'700px' , margin:'auto'}}
                />
            </form>
          {/* </div> */}
      </div>

        <div className="div">
        <button
          onClick={() => navigate("/AddContact")}
          className="px-2 sm:pr-4 py-1 border rounded-full items-center hidden md:flex gap-2 shadow hover:shadow-md"
        >
          <img src={AddIcon} className="w-9 h-9 rounded-full" />
          <span className="font-medium text-sm lg:text-base hidden sm:block">
            Create contact
          </span>
        </button>
        </div>
        </div >
      </header >
      

      <div className="relative px-4  ">
      <table className="w-full border-separate">
      <thead className="sticky top-16 z-10 bg-white border-b">
          <tr>
            <th className="w-1/2 text-left font-normal py-3 border-b px-4">
              Name
            </th>
            <th className="w-1/2 text-left font-normal py-3 border-b px-4">
              Phone Number
            </th>
          </tr>
        </thead>
        </table >
        </div >

      </>

    );

   
}



export default Home;