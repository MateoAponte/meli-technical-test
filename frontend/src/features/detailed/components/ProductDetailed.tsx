import { parsedCurrency } from '../../../common/utils/parsedCurrency';

const isNew = (condition: string) => {
  return condition === 'new';
};

export const ProductDetailed: React.FC<any> = ({ item = {} }) => {
  const parsedNumber = (value: string) => {
    return parsedCurrency(value);
  };

  return (
    <div className="detailed-data">
      <section className="detailed-info">
        <section className="detailed-image">
          <div className="detailed-image__gallery">
            <div className="detailed-image__gallery-item"></div>
          </div>
          <div className="detailed-image__picture">
            <img src={item.picture} alt={item.title} />
          </div>
        </section>
        <section className="detailed__sell-info">
          <h1 className="detailed__summary">
            {isNew(item.condition) && 'Nuevo'} | {parsedNumber(String(item.sold_quantity))}
          </h1>
          <div className="detailed-header">
            <h3 className="detailed__title"> {item.title} </h3>
            <div className="detailed__price">
              <h6>{parsedNumber(String(item.price?.amount))}</h6>
            </div>
          </div>
          <div className="detailed__actions">
            <button className="detailed__shop">Comprar ahora</button>
          </div>
        </section>
      </section>
      <div className="divider"></div>
      <section className="detailed-description">
        <div className="detailed-description__title">
          <h3> Descripción </h3>
        </div>
        <div className="detailed-description__text">
          <span> {item.description} </span>
        </div>
      </section>
    </div>
  );
};
