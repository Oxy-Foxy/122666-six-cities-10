import LocationsItem from '../../components/locations-item/locations-item';
import { useAppSelector } from '../../hooks';

function Favorites(): JSX.Element {
  const {offers} = useAppSelector((state)=>state);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoriteCities = [...new Set(offers.map((offer)=>offer.city.name))];

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((cityName) => <LocationsItem key={cityName} favoriteOffers={favoriteOffers} cityName={cityName} />)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
