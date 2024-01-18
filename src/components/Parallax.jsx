import PropTypes from "prop-types";

function Parallax({ mode }) {
  return (
    <div>
      <h1>{mode}</h1>
    </div>
  );
}

Parallax.propTypes = {
  mode: PropTypes.node,
};

export default Parallax;
