import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingSpinner from '../spinner/spinner';
import { useAppSelector } from '../../hooks';
import HistoryRouter from './../histoty-route/history-route';
import browserHistory from '../../browser-history';


function App(): JSX.Element {
  const {isDataLoading} = useAppSelector((state) => state);
  if(isDataLoading){
    return <LoadingSpinner/>;
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path={AppRoute.Login} element={<Login />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
