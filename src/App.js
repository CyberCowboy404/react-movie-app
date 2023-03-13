import { RouterProvider } from "react-router-dom";

import { Provider } from "mobx-react";
import stores from "stores";
import Container from "components/container/Container";
import router from "./router";

function App() {
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <Provider {...stores}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  );
}

export default App;
