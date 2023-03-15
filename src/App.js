import { RouterProvider } from "react-router-dom";

import { Provider } from "mobx-react";
import stores from "stores";
import Container from "components/container/Container";
import Header from "components/header/Header";
import router from "./router";

function App() {
  return (
    <Provider {...stores}>
      <Container>
        <Header />
        <RouterProvider router={router} />
      </Container>
    </Provider>
  );
}

export default App;
