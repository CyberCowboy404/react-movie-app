import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { Provider } from 'mobx-react';
import stores from 'stores';
import Container from 'components/container/Container';

const App = () => {
  return (
    <Provider {...stores}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  );
};

export default App;
