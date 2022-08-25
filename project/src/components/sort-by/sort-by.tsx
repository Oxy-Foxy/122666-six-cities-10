import { useState } from 'react';
import { SortTypes } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeSortType } from '../../store/app-process/app-process';
import { getSortType } from '../../store/app-process/selectors';


function SortBy():JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const sortType = useAppSelector(getSortType);
  const dispatch = useAppDispatch();
  const types = Object.values(SortTypes);

  const sortTypeChangeHandle = (type: string) => {
    dispatch(changeSortType(type));
    setIsOpen(false);
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
