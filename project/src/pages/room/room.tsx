import { useState, useEffect } from 'react';
import NotFound from '../not-found/not-found';
import PremiumStateLabel from '../../components/premium-state-label/premium-state-label';
import { useParams } from 'react-router-dom';
import Header from './../../components/header/header';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {fetchReviewsAction, fetchOfferAction, fetchNearbyPlacesAction} from '../../store/api-actions';
import {getOffer, getReviewsPendingStatus, getNearbyPendingStatus, getNearbyPlaces} from '../../store/data-process/selectors';
import {getCurrentCity} from '../../store/app-process/selectors';
import ReviewsList from '../../components/reviews-list/reviews-list';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import LoadingSpinner from '../../components/spinner/spinner';
import {getOfferById} from '../../store/data-process/data-process';

type ImageItemProps = {
  src: string,
  alt: string
}

type GoodsItemProps = {
  good: string
}

function ImageItem({src, alt}:ImageItemProps):JSX.Element {
  return(
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt={alt} />
    </div>
  );
}

function GoodsItem({good}:GoodsItemProps):JSX.Element {
  return(
    <li className="property__inside-item">{good}</li>
  );
}

function Room(): JSX.Element {
  const MAX_IMAGES_AMOUNT = 6;
  const {id: paramsId} = useParams();
  const reviewsPendingStatus = useAppSelector(getReviewsPendingStatus);
  const nearbyPendingStatus = useAppSelector(getNearbyPendingStatus);
  const dispatch = useAppDispatch();
  const [selectedPointId, setSelectedPointId] = useState<number|string>();
  const currentCity = useAppSelector(getCurrentCity);

  useEffect(()=>{
    paramsId && dispatch(getOfferById(paramsId));
  }, [paramsId]);

  const offer = useAppSelector(getOffer);
  useEffect(() => {
    paramsId && !offer && dispatch(fetchOfferAction(paramsId));
  }, [paramsId, offer]);


  useEffect(() => {
    if(paramsId && !reviewsPendingStatus) {
      dispatch(fetchReviewsAction(paramsId));
    }
  }, []);

  useEffect(() => {
    if(paramsId && !nearbyPendingStatus) {
      dispatch(fetchNearbyPlacesAction(paramsId));
    }
  }, []);

  const nearbyPlaces = useAppSelector(getNearbyPlaces);

  if(reviewsPendingStatus || nearbyPendingStatus) {
    return <LoadingSpinner />;
  }

  if(!offer) {
    return (<NotFound />);
  }

  const {isFavorite, isPremium, images, title, rating, type, bedrooms, maxAdults, price, goods, host, description, id} = offer;
  const imagesToRender = images.slice(0, MAX_IMAGES_AMOUNT);
  const formattedRoomType = `${type[0].toUpperCase()}${type.substring(1)}`;


  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {imagesToRender.map((src) => <ImageItem key={src} src={src} alt={type}/>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              { isPremium && <PremiumStateLabel className='property__mark'/> }
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <BookmarkButton offerIsFavorite={isFavorite} classPrefix={'property'} iconWidth={'31'} iconHeight={'33'}/>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{formattedRoomType}</li>
                <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item)=><GoodsItem key={item} good={item}/>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && (<span className="property__user-status">Pro</span>)}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <ReviewsList id={id}/>
            </div>
          </div>
          <section className="property__map map">
            <Map city={currentCity} offers={nearbyPlaces} selectedPointId={selectedPointId}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyPlaces.map((item) => (
                <div key={`place-${item.id}`} onMouseOver={() => setSelectedPointId(item.id)}>
                  <PlaceCard cardType={'cities'} offer={item} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
