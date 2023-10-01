import { ProductItem } from './ProductItem';

export const ProductsColumn: React.FC<any> = ({ items }) => {
  const max = items.slice(0, 4);
  console.log(max);

  return (
    <>
      <div className="products__container">
        {items.map((item: any) => (
          <ProductItem item={item} />
        ))}
      </div>
      <div className="products__pagination">Pag</div>
    </>
  );
};
