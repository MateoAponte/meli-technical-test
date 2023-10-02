import { ProductItem } from './ProductItem';

export const ProductsColumn: React.FC<any> = ({ items }) => {
  const max = items.slice(0, 4);
  return (
    <>
      <div className="products__container">
        {max.map((item: any) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
