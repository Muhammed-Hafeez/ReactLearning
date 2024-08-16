import propTypes from "prop-types";
function ConditionalRendering({ content, check }) {
  return (
      <div>
          <h3>ConditionalRendering on {check?"true":"false"}</h3>
      {content} {check && "ok"}
    </div>
  );
}
ConditionalRendering.propTypes = {
  content: propTypes.string.isRequired,
  check: propTypes.bool.isRequired,
};
export default ConditionalRendering;
