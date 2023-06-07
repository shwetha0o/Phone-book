//import logo from './logo.svg';
import "./style.css/App.css";

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./home.js";
import AddContact from "./addContact";
import ContactCard from "./contactCard";
import toast from "react-hot-toast";
import EditContact from "./editContact";
import api from "./api/contacts.js";
import { BrowserRouter, useLocation } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const location = useLocation()
  
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function addContactHandler(contact) {
    setContacts([...contacts, { id: crypto.randomUUID(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // const addContact = ({ name, phonenumber }) => {
  //   this.contacts.push({
  //     name,
  //     phonenumber,
  //     photo: `https://ui-avatars.com/api/?name=${name}&length=1&background=random&size=262`,
  //     id: `${this.contacts.length + 1}`,
  //   });
  //   toast.success("Contact added");
  // };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        console.log(searchTerm);
        console.log(contact);
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      console.log(newContactList);
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  // const findContact = (id) => {
  //   return contacts.find((e) => e.id === id);
  // };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(()=>{
    setContacts(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  }, [location.pathname])

  let renderContactList = [];

  if (searchResults.length > 0) {
    renderContactList = searchResults.map((contact) => {
      return (
        <>
          <ContactCard
            contacts={contact}
            clickHander={removeContactHandler}
            key={contact.id}
          />
        </>
      );
    });
  }else{
   renderContactList = contacts.map((contact) => {
      return (
        <>
          <ContactCard
            contacts={contact}
            clickHander={removeContactHandler}
            key={contact.id}
          />
        </>
      );
    });
  }

  // const updateContactHandler = async (contact) => {
  //   const response = await api.put(`/contacts/${contact.id}`, contact);
  //   const { id, name, email } = response.data;
  //   setContacts(
  //     contacts.map((contact) => {
  //       return contact.id === id ? { ...response.data } : contact;
  //     })
  //   );
  // };

  // const EditContactList = contacts.map((contact) => {
  //   return(
  //     <EditContact
  //     contacts={contact}

  //      key={contact.id}/>
  //   )
  // })

  //UPDATING DATA



  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {" "}
              <Home
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
              <div className="ui celled list">{renderContactList}</div>
            </>
          }
        />
        {/* <Route
            path='/'
            element={<Home/>}
            exact
            render={(props) => (
              <Home
                {...props}
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          /> */}
        <Route
          path="/AddContact"
          exact
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route path="/EditContact" exact element={<EditContact />} />
      </Routes>
    </div>
  );
}


export default App;