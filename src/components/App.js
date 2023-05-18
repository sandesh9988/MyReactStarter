import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id: "1",
      name: "Ram",
      email: "ram.lastdoor@gmail.com",
    },
    {
      id: "1",
      name: "Shyam",
      email: "shyam.lastdoor@gmail.com",
    },
  ]
  return (
   <div className="ui container">
    <Header/>
    <AddContact/> 
    <ContactList contacts={contacts}/>
   </div>
  );
}



export default App;
