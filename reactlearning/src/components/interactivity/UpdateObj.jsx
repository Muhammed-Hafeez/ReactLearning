import { useState } from "react";
import data from "../../assets/data";
const TraverseList = () => {
  return data.map((elem) => {
    return (
      <li key={elem.id}>
        <span> Name : {elem.name}</span>
        <span> age :{elem.age}</span>
        <span> profession :{elem.profession}</span>
      </li>
    );
  });
};
export default function UpdateObj() {
  const [list, setlist] = useState(TraverseList());
  const [name, setname] = useState("");
  const addPerson = (name) => {
    data.push({
      name,
      age: 0,
      id: data.length + 1,
      profession: "normal",
    });//first update the array
    setlist(TraverseList());//than set list
  };

  return (
    <div>
      <h3>updating the list</h3>
      <ul>{list}</ul>
      <input
        type="text"
        placeholder="Add Person"
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addPerson(name);
        }}
      >
        submit
      </button>
    </div>
  );
}
