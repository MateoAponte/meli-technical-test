import { ProductsColumn } from '../components/ProductsColumn';
import { SummaryColumn } from '../components/SummaryColumn';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncThunk } from '../redux/actions';
import { ITEMS_LISTS_NAME } from '../redux/types';
import { useSearchParams } from 'react-router-dom';
import { useMiddleware } from '../../../common/hooks/useMiddleware';
import { AppDispatch } from '../../../types/AppDispatch';
import { parsedNumber } from '../../../common/utils/parsedCurrency';

export const ItemsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const items = useSelector((state: any) => state[ITEMS_LISTS_NAME].items || []);
  const total = useSelector((state: any) => state[ITEMS_LISTS_NAME].total || []);
  const categories = useSelector((state: any) => state[ITEMS_LISTS_NAME].categories);

  useMiddleware((payload: any) => {
    dispatch(fetchAsyncThunk(payload));
  });
  const [params] = useSearchParams();
  const query = params.get('q');

  return (
    <>
      <div className="list-items__container">
        <aside className="list-items__summary">
          <SummaryColumn search={query} total={parsedNumber(total)} categories={categories} />
        </aside>
        <section className="list-items__products">
          <ProductsColumn items={items} />
        </section>
      </div>
    </>
  );
};
