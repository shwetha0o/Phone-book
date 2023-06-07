import React , {Component}from 'react';
import { Link , useNavigate} from 'react-router-dom'
import user from './user.png'
import Logo from './logo.png'
import AddIcon from './add.png'
import style from './style.css/App.css'
import { IoMdArrowBack } from "react-icons/io";
import { MdClose, MdOutlineSearch } from "react-icons/md";

class AddContact extends React.Component{
   
    state ={
        name : "",
        phonenumber: "",
        
    }

    

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.phonenumber === "") {
          alert("ALl the fields are mandatory!");
          return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", phonenumber: "" });
        
      };

   
    render()
    {
        return(
            <>

<Link to={"/"} className="flex px-8 py-3 items-center gap-3">
          <img src={Logo} className="w-10 h-10" />
          <span className="text-[#5f6368] text-xl">Phonebook</span>
        </Link>  


        <div className="px-12">
            
            <form
            className="bg-[#f1f3f4] focus-within:bg-white focus-within:shadow-md transition-all duration-500 ease-in-out flex items-center rounded-lg px-5 gap-5 relative">
            <MdOutlineSearch className="shrink-0" color="#5f6368" size={22} />
            <input 
            className="bg-transparent py-2 text-lg focus:outline-none"
            type="text" 
          placeholder="Search"
          
          />
            </form>

        </div>

<header className="sticky top-0 bg-white z-10">
      <div className="flex flex-col sm:flex-row sm:items-center pr-4 justify-between max-w-[1440px] m-auto">
<div className="p-8">
      <h1 className="mb-6 text-lg font-medium">Create Contact</h1>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex gap-8 flex-col sm:flex-row">
          <div className="flex gap-8">
            <div className="pt-2">
              <Link>
              <button >
                <IoMdArrowBack size={28} />
              </button>
              </Link>
            </div>
            <img
              className="rounded-full w-44 h-44"
              src={
                this.state.name
                  ? `https://ui-avatars.com/api/?name=${this.state.name[0]}&length=1&background=random&size=262`
                  : "https://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
              }
            />
          </div>
        </div>
      </div>



       
    
    
            {/* <h1 className="mb-6 text-lg font-medium">Create Contact</h1>   
            {/* A big user png here */}
            {/* <hr className="my-8" /> */} 
    
            <form 
            onSubmit={this.add }
            >
                <div className="flex gap-4 my-8 w-full items-center">
                    {/* <label className="form-label">Name</label> */}
                    <input 
                    className="border-b w-full focus:outline-none leading-8"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    />
                </div>
    
                <div className="flex gap-4 my-8 w-full items-center">
                    {/* <label className="form-label">Phone Number</label> */}
                    <input 
                    className="border-b w-full focus:outline-none leading-8"
                    type="text"
                    name="Phone number"
                    placeholder="Phone number"
                    value={this.state.phonenumber}
                    onChange={(e) => this.setState({ phonenumber: e.target.value })}
                    />
                </div>
    
                <div className="">
                <button
                    disabled={this.state.name === "" || this.state.phonenumber === ""}
                    className="h-10 bg-[#1a73e8] text-white px-8 rounded disabled:grayscale"
                    type="submit">
                        Create
                </button>
                </div>
            </form>
            </ div>
            </ div>
            </ header>
            
            </ >
        )
        
    }
}

// export function Navigation(){
//     const navigate = useNavigate();
//     return (<AddContact navigate={navigate}></AddContact>)
//}

export default AddContact;