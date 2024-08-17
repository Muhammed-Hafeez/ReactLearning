import { useContext } from "react";
import { LevelContext } from "./contextLevel";
import propTypes from "prop-types";

function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <div>
      <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
    </div>
  );
}
Section.propTypes = {
  children: propTypes.any,
};

export default Section;
