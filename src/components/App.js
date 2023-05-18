import React, { useState , useEffect } from "react"; //useState is react hooks for functional component and 
import './App.css';                               // useEffect is another react hook which helps to render the component when the value changes and also as a local storage
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]); //array is empty cause contacts have empty value in initial
 
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]); //to update the state and display on ui
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); // stringify converts a JavaScript value to a JSON string
 if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); // stringify converts a JavaScript value to a JSON string
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}



export default App;
