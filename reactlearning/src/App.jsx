// import ConditionalRendering from "./components/jsx/ConditionalRendering";
// import CurlyBraces from "./components/jsx/CurlyBraces";
// import ListRendering from "./components/jsx/ListRendering";
// import PropsExample from "./components/jsx/propsExample";

import CustomEvents from "./components/interactivity/CustomEvents";
import UseStateExample from "./components/interactivity/UseStateExample";

export default function App() {
  return (
    <div>
      {/* jsx related topics */}
      {/* <CurlyBraces />
      <PropsExample value="hello" />
      <ConditionalRendering content="this is content" check={true} />
      <ConditionalRendering content="this is content" check={false} />
      <ListRendering/> */}

      {/* interactivity  */}
      <CustomEvents />
      <UseStateExample />
    </div>
  );
}
