type RatingProps = {
  rating: number,
  classPrefix?: string,
  showValue?: boolean
}

function Rating({rating, classPrefix = 'place-card', showValue = false}:RatingProps):JSX.Element {
  return (
    <div className={`${classPrefix}__rating rating`}>
      <div className={`${classPrefix}__stars rating__stars`}>
        <span style={{width: `${Math.round(rating) * 20}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showValue && <span className={`${classPrefix}__rating-value rating__value`}>{Math.round(rating)}</span>}
    </div>
  );
}

export default Rating;
