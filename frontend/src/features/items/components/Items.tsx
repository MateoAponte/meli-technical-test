import { ProductsColumn } from './items/ProductsColumn';
import { SummaryColumn } from './items/SummaryColumn';

export const Items: React.FC<any> = ({ query, total, categories, items }) => {
  return (
    <>
      <aside className="list-items__summary">
        <SummaryColumn search={query} total={total} categories={categories} />
      </aside>
      <section className="list-items__products">
        <ProductsColumn items={items} />
      </section>
    </>
  );
};
