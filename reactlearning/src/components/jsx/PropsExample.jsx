import propTypes from "prop-types";
function PropsExample({ value }) {
  return (
    <div>
      <h3>passing hello as props</h3>
      propsvalue:{value}
    </div>
  );
}
PropsExample.propTypes = {
  value: propTypes.string.isRequired,
};
export default PropsExample;
