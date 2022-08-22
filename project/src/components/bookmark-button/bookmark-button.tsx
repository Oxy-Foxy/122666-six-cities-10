import { useAppDispatch } from '../../hooks';
import {changeFavoriteStatusAction} from '../../store/api-actions';

type BookmarkButtonProps = {
  offerId:number,
  offerIsFavorite: boolean,
  classPrefix?: string,
  iconWidth?:string,
  iconHeight?:string
}

function BookmarkButton({offerId, offerIsFavorite,classPrefix = 'place-card',iconWidth,iconHeight}: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    dispatch(changeFavoriteStatusAction({id: offerId, status: Number(!offerIsFavorite)}));
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
