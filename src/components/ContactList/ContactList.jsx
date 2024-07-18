import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactList, onDelete }) {
  return (
    <ul className={css.contact_list}>
      {contactList.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDeleteContact={onDelete} />
        </li>
      ))}
    </ul>
  );
}
