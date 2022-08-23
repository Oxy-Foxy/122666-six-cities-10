import { useState } from 'react';

type BookmarkButtonProps = {
  offerIsFavorite: boolean,
  classPrefix?: string,
  iconWidth?:string,
  iconHeight?:string
}

function BookmarkButton({offerIsFavorite,classPrefix = 'place-card',iconWidth,iconHeight}: BookmarkButtonProps): JSX.Element {
  const [roomIsFavorite, setRoomIsFavorite] = useState(offerIsFavorite || false);
  return (
    <button className={`${classPrefix}__bookmark-button button ${roomIsFavorite ? `${classPrefix}__bookmark-button--active` : ''}`} type="button" onClick={()=>{setRoomIsFavorite(!roomIsFavorite);}}>
      <svg className={`${classPrefix}__bookmark-icon ${roomIsFavorite ? 'place-card__bookmark-icon' : ''}`} width={iconWidth || '18'} height={iconHeight || '19'}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
