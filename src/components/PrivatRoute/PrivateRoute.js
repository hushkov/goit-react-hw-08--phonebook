import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
