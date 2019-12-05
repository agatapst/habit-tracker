import { createContext } from 'react';

const UserContext = createContext({ user: null, loading: true });

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
