import { useContext } from 'react';
import { UserContext } from './index';

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};
