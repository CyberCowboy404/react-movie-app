import { Outlet } from "react-router-dom";
import Header from "components/header/Header";
import "./Container.css";

function Container() {
  return (
    <main className="container">
      <Header />
      <Outlet />
    </main>
  );
}

export default Container;
