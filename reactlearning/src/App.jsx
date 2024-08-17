import ConditionalRendering from "./components/jsx/ConditionalRendering";
import CurlyBraces from "./components/jsx/CurlyBraces";
import ListRendering from "./components/jsx/ListRendering";
import PropsExample from "./components/jsx/propsExample";
import ExplainContext from "./components/ManagingState/context/ExplainContext";
import RCExample from "./components/ManagingState/ContextWithReducer/RCExample";
import ReducerExample from "./components/ManagingState/reducer/ReducerExample";
import CustomEvents from "./components/interactivity/CustomEvents";
import UpdateObj from "./components/interactivity/UpdateObj";
import UseStateExample from "./components/interactivity/UseStateExample";
import UseRefExample from "./components/EscapeHatches/UseRefExample";
import UseEffectExample from "./components/EscapeHatches/UseEffectExample";

export default function App() {
  return (
    <div>
      {/* jsx related topics */}
      <CurlyBraces />
      <PropsExample value="hello" />
      <ConditionalRendering content="this is content" check={true} />
      <ConditionalRendering content="this is content" check={false} />
      <ListRendering />

      {/* interactivity  */}
      <CustomEvents />
      <UseStateExample />
      <UpdateObj />
      {/* Managing State  */}
      <ReducerExample />
      <ExplainContext />
      <RCExample />
      {/* Escape Hatches */}
      <UseRefExample />
      <UseEffectExample />
    </div>
  );
}
