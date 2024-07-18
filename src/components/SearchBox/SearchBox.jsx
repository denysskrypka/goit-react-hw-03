import css from "./SearchBox.module.css";

export default function SearchBox({ currentValue, onEnter }) {
  const handleChange = (event) => {
    onEnter(event.target.value);
  };
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input type="text" value={currentValue} onChange={handleChange} />
    </div>
  );
}
