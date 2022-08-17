import {Link} from 'react-router-dom';
import LocationsItem from '../../components/locations-item/locations-item';
import Header from './../../components/header/header';
import { useAppSelector } from '../../hooks';
import {getOffers} from '../../store/data-process/selectors';

function FavoritesList():JSX.Element {
  const offers = useAppSelector(getOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoriteCities = [...new Set(offers.map((offer)=>offer.city.name))];

  return (
    <ul className="favorites__list">
      {favoriteCities.map((cityName) => <LocationsItem key={cityName} favoriteOffers={favoriteOffers} cityName={cityName} />)}
    </ul>
  );
}

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {<FavoritesList />}
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
