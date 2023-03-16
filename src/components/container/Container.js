import { Outlet } from "react-router-dom";
import Header from "components/header/Header";
import "./Container.scss";

function Container() {
  return (
    <main className="container">
      <Header />
      <Outlet />
    </main>
  );
}

export default Container;
