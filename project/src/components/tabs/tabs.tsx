import { CITIES } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/app-process/app-process';
import { getCurrentCity } from '../../store/app-process/selectors';
import CityTab from '../../components/city-tab/city-tab';

function Tabs():JSX.Element {
  const city = useAppSelector(getCurrentCity);
  const citiesNames = CITIES.map((item)=>item.name);
  const dispatch = useAppDispatch();

  const cityChangeHandle = (cityName: string) => {
    dispatch(changeCity(cityName));
  };

  return (
    <ul className="locations__list tabs__list">
      {citiesNames.map((cityName)=><CityTab key={cityName} cityName={cityName} activeCity={city} onCityChange={cityChangeHandle}/>)}
    </ul>
  );
}

export default Tabs;
