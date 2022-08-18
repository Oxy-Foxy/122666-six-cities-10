import {memo} from 'react';
import { Offer } from '../../types/offers';
import {Link} from 'react-router-dom';
import PremiumStateLabel from '../../components/premium-state-label/premium-state-label';
import Rating from '../../components/rating/rating';
import OfferCardPrice from '../../components/offer-card-price/offer-card-price';
import OfferCardDescription from '../../components/offer-card-description/offer-card-description';

type PlaceCardProps = {
  offer: Offer,
  cardType: 'cities' | 'favorites' | 'near-places'
}

function PlaceCard({offer, cardType}: PlaceCardProps): JSX.Element {
  const {isFavorite,isPremium, id, previewImage, title, price, rating, type} = offer;
  const roomLink = `offer/${id}`;
  const imgWidth = cardType === 'favorites' ? '150' : '260';
  const imgHeight = cardType === 'favorites' ? '110' : '200';

  return (
    <article className={`${cardType}__card place-card`}>
      { isPremium && <PremiumStateLabel /> }
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={roomLink}>
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt={title} />
        </Link>
      </div>
      <div className={`place-card__info ${cardType === 'favorites' ? 'favorites__card-info' : ''}`}>
        <OfferCardPrice isFavorite={isFavorite} price={price}/>
        <Rating rating={rating} />
        <OfferCardDescription roomLink={roomLink} title={title} type={type}/>
      </div>
    </article>
  );
}

export default memo(PlaceCard);
