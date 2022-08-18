import { useState } from 'react';
import Place from '../../components/place/place';
import Map from '../../components/map/map';
import {CITIES} from '../../const';
import { useAppSelector } from '../../hooks';
import { Offers } from '../../types/offers';
import { Point } from '../../types/points';
import SortBy from '../../components/sort-by/sort-by';
import {getCurrentCity, sortOffers} from '../../store/app-process/selectors';

function Cities():JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number>();
  const offers = useAppSelector(sortOffers);
  const city = useAppSelector(getCurrentCity);
  const placesAmount = offers.length;
  const offersToPoints = (items:Offers) => items.map((item)=>({latitude: item.location.latitude,longitude: item.location.longitude, title:item.title}));

  const cityFull = CITIES.filter((item) => item.name === city)[0];
  const points = offersToPoints(offers);
  const [selectedPoint, setSelectedPoint] = useState<Point>();

  const activeOfferChangeHandle = (id:number) => {
    setActiveCardId(id);
    const activeOffers = offers.filter((offer) => offer.id === id);
    const point = offersToPoints(activeOffers)[0];
    setSelectedPoint(point);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesAmount} places to stay in {city}</b>
          {<SortBy />}
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => <Place key={`place-${offer.id}`} offer={offer} isActive={offer.id === activeCardId} setActive={activeOfferChangeHandle}/>)}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map city={cityFull} points={points} selectedPoint={selectedPoint}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cities;
