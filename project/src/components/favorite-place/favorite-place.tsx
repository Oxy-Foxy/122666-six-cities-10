import { useState } from 'react';
import {Offer} from '../../types/offers';
import {Link} from 'react-router-dom';
import PremiumStateLabel from '../../components/premium-state-label/premium-state-label';
import OfferCardPrice from '../../components/offer-card-price/offer-card-price';
import Rating from '../../components/rating/rating';
import OfferCardDescription from '../../components/offer-card-description/offer-card-description';

type PlaceProps = {
  offer: Offer
}

function FavoritePlace({offer}:PlaceProps): JSX.Element {
  const {isFavorite, isPremium, id, title, price, rating, type, previewImage} = offer;
  const [offerIsPremium] = useState(isPremium);
  const roomLink = `/offer/${id}`;
  return (
    <article className="favorites__card place-card">
      { offerIsPremium && <PremiumStateLabel /> }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={roomLink}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={title} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <OfferCardPrice isFavorite={isFavorite} price={price}/>
        <Rating rating={rating} />
        <OfferCardDescription roomLink={roomLink} title={title} type={type}/>
      </div>
    </article>
  );
}

export default FavoritePlace;
