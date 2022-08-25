import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LoadingSpinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const {children} = props;
  if(authorizationStatus === AuthorizationStatus.Unknown){
    return <LoadingSpinner />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
