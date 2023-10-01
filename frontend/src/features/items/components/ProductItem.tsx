import { useNavigate } from 'react-router-dom';

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
            <span className="product-card__price"> {item.price.amount} </span>
            <span className="product-card__amounts"> {item.price.currency} </span>
          </div>
          <span className="product-card__shipping"> {item.free_shipping.free_shipping} </span>
          <span className="product-card__description"> {item.title} </span>
        </div>
        <div className="product-card__mark"></div>
      </div>
    </>
  );
};
