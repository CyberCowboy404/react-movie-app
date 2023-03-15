import { Outlet } from "react-router-dom";
import Header from "components/header/Header";
import { PropTypes } from "prop-types";
import "./Container.css";

function Container({ children }) {
  return <main className="container">
    <Header />
    <Outlet />
  </main>;
}

Container.propTypes = {
  children: PropTypes.any
};

export default Container;
