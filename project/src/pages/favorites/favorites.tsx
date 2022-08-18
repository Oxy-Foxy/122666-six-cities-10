import {Link} from 'react-router-dom';
import LocationsItem from '../../components/locations-item/locations-item';
import Header from './../../components/header/header';
import { useAppSelector } from '../../hooks';
import {getOffers} from '../../store/data-process/selectors';

function EmptyMessage():JSX.Element {
  return (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Nothing yet saved.</b>
      <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
    </div>
  );
}

function Favorites(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoriteCities = [...new Set(offers.map((offer)=>offer.city.name))];

  return (
    <div className={`page ${favoriteOffers.length ? '' : 'page--favorites-empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${favoriteOffers.length ? '' : 'page__main--favorites-empty' }`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${favoriteOffers.length ? '' : 'favorites--empty'}`}>
            <h1 className={`${favoriteOffers.length ? 'favorites__title' : 'visually-hidden'}`}>{ favoriteOffers.length ? 'Saved listing' : 'Favorites (empty)'}</h1>
            {
              favoriteOffers.length ?
                (
                  <ul className="favorites__list">
                    {favoriteCities.map((cityName) => <LocationsItem key={cityName} favoriteOffers={favoriteOffers} cityName={cityName} />)}
                  </ul>
                )
                :
                <EmptyMessage/>
            }
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={'/'}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
