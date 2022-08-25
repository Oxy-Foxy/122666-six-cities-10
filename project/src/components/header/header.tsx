import React from 'react';
import {Link} from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector, useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import { getAuthorizationStatus, getUserAvatar, getUserEmail } from '../../store/user-process/selectors';
import { getFilteredFavoriteOffers } from '../../store/data-process/selectors';

type HeaderProps = {
  showNav?: boolean
}

const HeaderUser = ():JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userEmail = useAppSelector(getUserEmail);
  const userAvatar = useAppSelector(getUserAvatar);
  const favoriteOffers = useAppSelector(getFilteredFavoriteOffers);
  const dispatch = useAppDispatch();
  return authorizationStatus === AuthorizationStatus.Auth ? (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper" style={{overflow:'hidden', borderRadius:'50%'}}>
            <img src={userAvatar} alt="" />
          </div>
          <span className="header__user-name user__name">{userEmail}</span>
          <span className="header__favorite-count">{favoriteOffers.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" onClick={(evt) => {
          evt.preventDefault();
          dispatch(logoutAction());
        }}
        to='/'
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  ) : (
    <li className="header__nav-item user">
      <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
};

const Header = ({showNav = true}:HeaderProps):JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active" href="/">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </a>
        </div>
        { showNav ? (
          <nav className="header__nav">
            <ul className="header__nav-list">
              <HeaderUser />
            </ul>
          </nav>
        ) : '' }

      </div>
    </div>
  </header>
);

export default Header;
