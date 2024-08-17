import { GetContext } from "./AppState";

function Count() {
  let context = GetContext();
  let count = context.state.count;
  return (
    <div>
      <div className="count">{count}</div>
      <button
        onClick={() => {
          context.dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          context.dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default Count;
