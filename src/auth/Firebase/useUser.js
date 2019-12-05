import { useContext } from 'react';
import { UserContext } from './index';

export const useUser = () => {
  const { user, loading } = useContext(UserContext);
  return { user, loading };
};
