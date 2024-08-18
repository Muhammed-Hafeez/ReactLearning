import PropTypes from "prop-types";

const Child = (props) => {
  return (
    <div>
      <button onClick={props.alert}>alert</button>
      <button onClick={props.confirm}>confirm</button>
    </div>
  );
};
const CustomEvents = () => {
  return (
    <div>
      <h3>Creating Custom Events</h3>
      <Child
        alert={() => {
          alert("this is alert");
        }}
        confirm={() => {
          confirm("this is confirm");
        }}
      />
    </div>
  );
};
Child.propTypes = {
  alert: PropTypes.func,
  confirm: PropTypes.func,
};

export default CustomEvents;
