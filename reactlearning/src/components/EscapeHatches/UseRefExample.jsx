import { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef(null);
  function HandleOnClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input type="text" placeholder="input ref" ref={inputRef} />
      <button onClick={HandleOnClick}>focus</button>
    </div>
  );
}

export default UseRefExample;
