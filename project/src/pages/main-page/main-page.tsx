import { useAppSelector } from '../../hooks';
import { getSortedOffers } from '../../store/app-process/selectors';
import Header from './../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import Cities from '../../components/cities/cities';

function MainPage(): JSX.Element {
  const offers = useAppSelector(getSortedOffers);
  return(
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${offers.length ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            {<Tabs />}
          </section>
        </div>
        {<Cities />}
      </main>
    </div>
  );
}

export default MainPage;
