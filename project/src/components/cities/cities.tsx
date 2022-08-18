import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import {CITIES, sortTypes} from '../../const';
import { useAppSelector } from '../../hooks';
import { Offers } from '../../types/offers';
import { Point } from '../../types/points';
import SortBy from '../../components/sort-by/sort-by';
import {getOffers} from '../../store/data-process/selectors';
import {getCurrentCity, getSortType} from '../../store/app-process/selectors';

const sortOffers = (type: string, offers: Offers):Offers => {
  switch (type) {
    case sortTypes.Popular:
      return offers;
    case sortTypes.LowToHight:
      return offers.sort((a,b) => a.price - b.price);
    case sortTypes.HighToLow:
      return offers.sort((a,b) => b.price - a.price);
    case sortTypes.TopRated:
      return offers.sort((a,b) => b.rating - a.rating);
    default:
      return offers;
  }
};

function Cities():JSX.Element {
  const [, setActiveCardId] = useState<number>();
  const offers = useAppSelector(getOffers);
  const city = useAppSelector(getCurrentCity);
  const sortType = useAppSelector(getSortType);
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  const offersCopy = cloneDeep(filteredOffers);
  let sortedOffers = sortOffers(sortType, offersCopy);
  const placesAmount = filteredOffers.length;
  const offersToPoints = (items:Offers) => items.map((item)=>({latitude: item.location.latitude,longitude: item.location.longitude, title:item.title}));

  const cityFull = CITIES.filter((item) => item.name === city)[0];
  const points = offersToPoints(filteredOffers);
  const [selectedPoint, setSelectedPoint] = useState<Point>();

  const activeOfferChangeHandle = (id:number) => {
    setActiveCardId(id);
    const activeOffers = filteredOffers.filter((offer) => offer.id === id);
    const point = offersToPoints(activeOffers)[0];
    setSelectedPoint(point);
  };

  const onSortChange = (type: string) => {
    sortedOffers = sortOffers(type,offersCopy);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesAmount} places to stay in {city}</b>
          {<SortBy onSortChange={onSortChange}/>}
          <div className="cities__places-list places__list tabs__content">
            {sortedOffers.map((offer) => <PlaceCard key={`place-${offer.id}`} cardType={'cities'} offer={offer} setActive={activeOfferChangeHandle}/>)}
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
