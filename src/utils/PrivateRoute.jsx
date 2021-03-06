import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../auth/Firebase';
import { Loader } from '../components/Loader';

export const PrivateRoute = ({ component, ...props }) => {
  const RedirectToLogin = () => <Redirect to="/login" />;

  const [componentToRender, setComponentToRender] = useState(null);
  const { user, loading } = useUser();

  useEffect(() => {
    if (loading) {
      setComponentToRender(() => Loader);
    } else {
      setComponentToRender(() => (user ? component : RedirectToLogin));
    }
  }, [user, loading, component]);

  return <Route {...props} component={componentToRender} />;
};
