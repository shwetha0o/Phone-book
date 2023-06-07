import {useNavigate , Link} from 'react-router-dom'
import user from './logo.png'
import { MdDelete , MdOutlineModeEditOutline} from "react-icons/md";

const ContactCard = (props) => {
    console.log(props);

    const navigate = useNavigate();
  
    const {name , phonenumber, id} = props.contacts;
  return (
    <>
    <tr
      onClick={() => {
        navigate("AddContact");
      }}
      role="button"
      className="hover:bg-[#f5f5f5] group relative"></tr>

<div className="relative px-4  ">
      <table className="w-full border-separate">     
      <thead className="sticky top-16 z-10 bg-white border-b">
       </ thead>

       <tbody>
       
     <td className="flex items-center gap-5 px-4">
        <img className="w-9 h-9 rounded-5" src={user} alt="user" />
        <span className="py-4">{name}</span>
     </td>
        <td className="px-4">
        {phonenumber}
        </td>

        <button
          className="h-full"
          onClick={() => navigate(`/editContact?id=${id}`)} 
        >
            <MdOutlineModeEditOutline
            className="text-[#00000051] hover:text-black"
            size={24} />
        </button>

        <button
        type="submit"
        // className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      > <MdDelete className="text-[#00000051] hover:text-black" size={24} /></button>

    
       </tbody>

</ table>
</ div>


    </>
  );

}

export default ContactCard;