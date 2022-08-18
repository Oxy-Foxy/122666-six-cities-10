import {Link} from 'react-router-dom';

type OfferCardDescriptionProps = {roomLink: string, title: string, type: string}

function OfferCardDescription({roomLink, title, type}:OfferCardDescriptionProps):JSX.Element {
  const offerType = `${type[0].toUpperCase()}${type.substring(1)}`;

  return (
    <>
      <h2 className="place-card__name">
        <Link to={roomLink}>{title}</Link>
      </h2>
      <p className="place-card__type">{offerType}</p>
    </>
  );
}

export default OfferCardDescription;
