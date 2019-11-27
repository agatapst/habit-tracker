import { createContext } from 'react';

const UserContext = createContext({ user: null });

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
