import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {sortTypes} from '../../const';
import {changeSortType} from '../../store/app-process/app-process';
import {getSortType} from '../../store/app-process/selectors';

type SortByProps = {
  onSortChange: (sortType:string) => void;
}

function SortBy({onSortChange}: SortByProps):JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const sortType = useAppSelector(getSortType);
  const dispatch = useAppDispatch();
  const types = Object.values(sortTypes);

  const sortTypeChangeHandle = (type: string) => {
    dispatch(changeSortType(type));
    setIsOpen(false);
    onSortChange(type);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        &nbsp;{sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {types.map((item) => (<li className={`places__option ${item === sortType ? 'places__option--active' : ''}`} tabIndex={0} key={item} onClick={() => sortTypeChangeHandle(item)}>{item}</li>))}
      </ul>
    </form>
  );
}

export default SortBy;