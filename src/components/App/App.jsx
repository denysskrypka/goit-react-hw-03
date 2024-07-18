import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

const getContacts = () => {
  const savedContacts = localStorage.getItem("contacts");
  return savedContacts !== null
    ? JSON.parse(savedContacts)
    : [
        { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
        { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
      ];
};

export default function App() {
  const [contacts, setContacts] = useState(getContacts);
  const [inputValue, setInputValue] = useState("");

  const handleAddContact = (newContact) =>
    setContacts([...contacts, newContact]);

  const handleDeleteContact = (id) =>
    setContacts(contacts.filter((contact) => contact.id !== id));

  const handleChangeInputValue = (newValue) => {
    setInputValue(newValue);
  };

  const contactNamesArray = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const checkContactNamesArray =
    contactNamesArray.length !== 0 ? contactNamesArray : contacts;

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phone Book</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox currentValue={inputValue} onEnter={handleChangeInputValue} />
      <ContactList
        contactList={checkContactNamesArray}
        onDelete={handleDeleteContact}
      />
    </div>
  );
}
