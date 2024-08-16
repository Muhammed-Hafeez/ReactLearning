import { useState } from "react";
export default function UseStateExample() {
  const [num, setnum] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        {num}
      </button>
    </div>
  );
}
