import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../const';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorisationStatus={AuthorisationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path={AppRoute.Login} element={<Login />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
