import { RouterProvider } from "react-router-dom";

import { Provider } from "mobx-react";
import stores from "stores";
import router from "./Router";

function App() {
  return (
    <Provider {...stores}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
