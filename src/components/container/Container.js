import { PropTypes } from "prop-types";
import "./Container.css";

function Container({ children }) {
  return <main className="container">{children}</main>;
}

Container.propTypes = {
  children: PropTypes.any
};

export default Container;
