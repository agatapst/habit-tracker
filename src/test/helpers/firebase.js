export const MockFirebase = () => {
  const initializeApp = jest.fn();

  const auth = jest.fn(() => {
    return {
      createUserAndRetrieveDataWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
      signInAndRetrieveDataWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
      fetchSignInMethodsForEmail: jest.fn(() => Promise.resolve(true)),
      signOut: jest.fn(() => Promise.resolve(true)),
      onAuthStateChanged: jest.fn()
    };
  });

  const firestore = Firestore;

  const storage = jest.fn(() => {
    return {
      ref: jest.fn(() => {
        return {
          child: jest.fn(() => {
            return {
              put: jest.fn(() => Promise.resolve(true))
            };
          })
        };
      })
    };
  });
};
