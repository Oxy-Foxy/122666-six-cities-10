import { useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';
import { changeCity } from '../../store/app-process/app-process';
import { redirectToRoute } from '../../store/actions';
import { Offer } from '../../types/offers';
import PlaceCard from '../../components/place-card/place-card';

type LocationsItemProps = {
  favoriteOffers: Offer[];
  cityName:string
}

function LocationsItem({favoriteOffers, cityName}:LocationsItemProps):JSX.Element {
  const dispatch = useAppDispatch();
  const filteredOffers = favoriteOffers.filter((offer)=>offer.city.name === cityName);
  const cityChangeHandle = (city: string) => {
    dispatch(changeCity(city));
    dispatch(redirectToRoute(AppRoute.Root));
  };
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <button className="locations__item-link" style={{border:'none'}} onClick={() => cityChangeHandle(cityName)}>
            <span>{cityName}</span>
          </button>
        </div>
      </div>
      <div className="favorites__places">
        {filteredOffers.map((offer) => <PlaceCard key={`place-${offer.id}`} cardType={'favorites'} offer={offer} />)}
      </div>
    </li>
  );
}

export default LocationsItem;
