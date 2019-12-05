import { createContext } from 'react';

const FirebaseContext = createContext(null);

export const FirebaseProvider = FirebaseContext.Provider;
export const FirebaseConsumer = FirebaseContext.Consumer;
export default FirebaseContext;