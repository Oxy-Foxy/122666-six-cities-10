import { useAppSelector, useAppDispatch } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import {changeFavoriteStatusAction} from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { redirectToRoute } from '../../store/actions';

type BookmarkButtonProps = {
  offerId:number,
  offerIsFavorite: boolean,
  classPrefix?: string,
  iconWidth?:string,
  iconHeight?:string
}

function BookmarkButton({offerId, offerIsFavorite,classPrefix = 'place-card',iconWidth,iconHeight}: BookmarkButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteStatusAction({id: offerId, status: Number(!offerIsFavorite)}));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  return (
    <button className={`${classPrefix}__bookmark-button button ${offerIsFavorite ? `${classPrefix}__bookmark-button--active` : ''}`} type="button" onClick={handleFavoriteClick}>
      <svg className={`${classPrefix}__bookmark-icon ${offerIsFavorite ? 'place-card__bookmark-icon' : ''}`} width={iconWidth || '18'} height={iconHeight || '19'}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
