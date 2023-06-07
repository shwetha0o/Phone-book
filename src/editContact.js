import React, { useState } from "react";
import { MdOutlinePhone, MdPersonOutline } from "react-icons/md";
import Logo from "./logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LOCAL_STORAGE_KEY = "contacts";

const EditContact = () => {
   const location = useLocation();
    const navigate = useNavigate()
   const searchParams = new URLSearchParams(location.search);
   const id = searchParams.get("id");
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phonenumber) {
      alert("All fields are mandatory!");
      return;
    }

    console.log(id)

    const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return {
          ...contact,
          name,
          phonenumber,
        };
      }
      return contact;
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
    console.log("Contact updated:", updatedContacts);
    navigate("/")
  };

  return (
    <div>
      <form className="max-w-[520px]" onSubmit={handleSubmit}>
        <Link to={"/"} className="flex px-8 py-3 items-center gap-3">
          <img src={Logo} className="w-10 h-10" alt="Logo" />
          <span className="text-[#5f6368] text-xl">Phonebook</span>
        </Link>

        <div className="flex gap-4 my-8 w-full items-center">
          <MdPersonOutline size={28} className="opacity-[0.56]" />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b w-full focus:outline-none leading-8"
            placeholder="Name"
          />
        </div>

        <div className="flex gap-4 my-8 w-full items-center">
          <MdOutlinePhone size={28} className="opacity-[0.56]" />
          <input
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border-b w-full focus:outline-none leading-8"
            placeholder="Phone number"
          />
        </div>

        <div className="">
          <button
            type="submit"
            className="h-10 bg-[#1a73e8] text-white px-8 rounded disabled:grayscale"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
