import { useReducer, useState } from "react";
import { reducer } from "./reducer";
import Render from "./Render";

export default function ReducerExample() {
  const initialCount = [];
  const [text, setText] = useState("");
  const [nextId, setNextId] = useState(1);
  const [list, dispatch] = useReducer(reducer, initialCount);

  const AddTask = () => {
    dispatch({ type: "add", text, nextId });
    setNextId(nextId + 1);
  };
  const updateTask = (id) => {
    dispatch({ type: "update", text, id });
  };
 const deleteTask = (id) => {
   dispatch({ type: "delete", id });
 };
  return (
    <div>
      <h3>Using Reducer</h3>
      <div className="add">
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={AddTask}>submit</button>
      </div>
      <Render list={list} updateTask={updateTask} deleteTask={deleteTask}/>
    </div>
  );
}
