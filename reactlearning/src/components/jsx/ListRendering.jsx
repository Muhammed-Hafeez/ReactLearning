import data from "../../assets/data.js";

export default function ListRendering() {
  let listItems = data.map((person) => {
    return (
      <li key={person.id}>
        name:{person.name} age:{person.age} profession:{person.profession} id:
        {person.id}
      </li>
    );
  });
  return (
    <div>
      <h3>list rendering</h3>
      <ul>{listItems}</ul>
    </div>
  );
}
