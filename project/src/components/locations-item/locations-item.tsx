import {Offers} from '../../types/offers';
import PlaceCard from '../../components/place-card/place-card';

type LocationsItemProps = {
  favoriteOffers: Offers;
  cityName:string
}

function LocationsItem({favoriteOffers, cityName}:LocationsItemProps):JSX.Element {
  const filteredOffers = favoriteOffers.filter((offer)=>offer.city.name === cityName);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {filteredOffers.map((offer) => <PlaceCard key={`place-${offer.id}`} cardType={'favorites'} offer={offer} setActive={() => false}/>)}
      </div>
    </li>
  );
}

export default LocationsItem;
