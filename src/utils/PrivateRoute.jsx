import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../auth/Firebase';
import { Typography } from '@material-ui/core';

export const PrivateRoute = ({ component, ...props }) => {
  const LoadingIndicator = () => <Typography variant="body">Loading...</Typography>;
  const RedirectToLogin = () => <Redirect to="/login" />;

  const [componentToRender, setComponentToRender] = useState(null);
  const { user, loading } = useUser();

  useEffect(() => {
    if (loading) {
      setComponentToRender(() => LoadingIndicator);
    } else {
      setComponentToRender(() => (user ? component : RedirectToLogin));
    }
  }, [user, loading, component]);

  return <Route {...props} component={componentToRender} />;
};
