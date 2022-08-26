import { Review } from '../../types/reviews';
import Rating from '../../components/rating/rating';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem({review}:ReviewItemProps): JSX.Element {
  const { comment, date, user, rating} = review;
  const userName = user.name.split('.')[0];
  const dateTime = new Date(date).toISOString().split('T')[0];
  const humanizedDate = new Date(date).toLocaleDateString('en-EN', {month: 'long', day: 'numeric'});

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} classPrefix={'reviews'} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>{humanizedDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
