import propTypes from "prop-types";
import { useState } from "react";
function Render({ list, updateTask, deleteTask }) {
  const [update, setupdate] = useState(1);
  return (
    <div>
      {list.map((elem) => {
        return (
          <div key={elem.id}>
            <input type="checkbox" />
            <span>{elem.text}</span>
            <button
              className="edit"
              onClick={() => {
                updateTask(elem.id);
                update ? setupdate(0) : setupdate(1);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteTask(elem.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
Render.propTypes = {
  list: propTypes.array.isRequired,
  updateTask: propTypes.func.isRequired,
  deleteTask: propTypes.func.isRequired,
};
export default Render;
