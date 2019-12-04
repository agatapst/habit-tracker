import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { MockFirebase } from '../helpers/firebase';
import { FirebaseProvider, UserProvider } from '../../auth/Firebase';

export const renderApp = (children, { route = '/', authorized, user } = {}) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const mockUser = authorized ? user || getAuthUser() : undefined;

  const result = render(
    <FirebaseProvider value={MockFirebase}>
      <UserProvider value={{ user: { mockUser } }}>
        <Router history={history}>{children}</Router>
      </UserProvider>
    </FirebaseProvider>
  );

  return {
    ...result,
    history
  };
};
