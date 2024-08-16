const obj = {
  theme: {
    backgroundColor: "black",
    color: "green",
  },
  content: "hello hasbulla",
};
export default function CurlyBraces() {
    return <div style={obj.theme}>
        <h3>using curly braces</h3>
        {obj.content};
    </div>;
}
