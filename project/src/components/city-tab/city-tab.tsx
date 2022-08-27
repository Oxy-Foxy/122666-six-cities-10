
type CityTabProps = {
  cityName: string,
  activeCity: string | undefined,
  cityChangeHandle: (cityName:string)=>void
}

function CityTab({cityName, activeCity,cityChangeHandle}:CityTabProps) {
  const className = activeCity === cityName ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';

  return (
    <li className="locations__item">
      <span style={{cursor:'pointer'}} className={className} onClick={()=>{cityChangeHandle(cityName);}}>
        <span>{cityName}</span>
      </span>
    </li>
  );
}

export default CityTab;

