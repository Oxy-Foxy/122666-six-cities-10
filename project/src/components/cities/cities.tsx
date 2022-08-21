import { useState } from 'react';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import SortBy from '../../components/sort-by/sort-by';
import {getCurrentCity, getSortedOffers} from '../../store/app-process/selectors';
import PlaceCard from '../place-card/place-card';

function Cities():JSX.Element {
  const offers = useAppSelector(getSortedOffers);
  const placesAmount = offers.length;
  const [selectedPointId, setSelectedPointId] = useState<number|string>();
  const currentCity = useAppSelector(getCurrentCity);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesAmount} places to stay in {currentCity}</b>
          {<SortBy />}
          <div className="near-places__list places__list">
            {offers.map((item) => (
              <div key={`place-${item.id}`} onMouseOver={() => setSelectedPointId(item.id)}>
                <PlaceCard cardType={'cities'} offer={item} />
              </div>
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map city={currentCity} offers={offers} selectedPointId={selectedPointId}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cities;
