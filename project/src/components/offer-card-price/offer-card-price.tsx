import BookmarkButton from '../bookmark-button/bookmark-button';

type OfferCardPriceType = {
  id:number,
  price: number, isFavorite:boolean
}

function OfferCardPrice({id, price, isFavorite}:OfferCardPriceType):JSX.Element {
  return (
    <div className="place-card__price-wrapper">
      <div className="place-card__price">
        <b className="place-card__price-value">&euro;{price}</b>
        <span className="place-card__price-text">&#47;&nbsp;night</span>
      </div>
      <BookmarkButton offerId={id} offerIsFavorite={isFavorite} />
    </div>
  );
}

export default OfferCardPrice;
