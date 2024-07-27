import PropTypes from "prop-types";

export const Button = ({ children, ...props }) => (
  <button
    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow-md cursor-pointer outline-none border-none select-none disabled:bg-neutral-300 disabled:cursor-not-allowed"
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};