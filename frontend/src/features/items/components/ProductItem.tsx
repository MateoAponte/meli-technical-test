import { useNavigate } from 'react-router-dom';
import { parsedCurrency } from '../../../common/utils/parsedCurrency';

const isFreeShipping = (freeShipping: boolean) => {
  return freeShipping && <span className="product-card__shipping"> Envío Gratis </span>;
};

export const ProductItem: React.FC<any> = ({ item }) => {
  const navigate = useNavigate();

  const handlerClick = (id: string) => {
    navigate('/item/' + id);
  };

  return (
    <>
      <div className="product-card">
        <div className="product-card__thumbnail">
          <img src={item.picture} alt={item.title} />
        </div>
        <div className="product-card__info">
          <h3 className="product-card__title" onClick={() => handlerClick(item.id)}>
            {item.title}
          </h3>
          <div className="product-card__cost">
            <h5 className="product-card__price"> {parsedCurrency(item.price.amount)} </h5>
            <span className="product-card__amounts"> {item.price.currency} </span>
          </div>
          {isFreeShipping(item.free_shipping?.free_shipping)}
          <span className="product-card__description"> {item.title} </span>
        </div>
        <div className="product-card__mark"></div>
      </div>
    </>
  );
};
