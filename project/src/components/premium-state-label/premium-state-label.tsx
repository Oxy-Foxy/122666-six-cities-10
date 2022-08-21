type PremiumStateLabelProps = {
  className?:string
}

function PremiumStateLabel({className = 'place-card__mark'}:PremiumStateLabelProps): JSX.Element {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumStateLabel;
