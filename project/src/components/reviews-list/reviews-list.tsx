import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewItem from '../../components/reviews-item/reviews-item';
import { getReviews } from '../../store/data-process/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';

type ReviewsListProps = {
  id: number
}

function ReviewsList({id}:ReviewsListProps):JSX.Element {
  const MAX_REVIEWS_AMOUNT = 10;
  const reviews = useAppSelector(getReviews);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const reviewsToRender = reviews.slice(0, MAX_REVIEWS_AMOUNT).sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsToRender.map((item) => <ReviewItem key={item.id} review={item}/>)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm id={id} />}
    </section>
  );
}

export default ReviewsList;
