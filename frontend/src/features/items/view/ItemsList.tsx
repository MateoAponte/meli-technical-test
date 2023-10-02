import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncThunk } from '../redux/actions';
import { ITEMS_LISTS_NAME } from '../redux/types';
import { useSearchParams } from 'react-router-dom';
import { useMiddleware } from '../../../common/hooks/useMiddleware';
import { AppDispatch } from '../../../types/AppDispatch';
import { parsedNumber } from '../../../common/utils/parsedCurrency';
import { useEffect, useState } from 'react';
import { COMMON_STORE_NAME } from '../../../store/common/types';
import { NotResult } from '../components/NotResults';
import { Items } from '../components/Items';

export const ItemsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: any) => state[COMMON_STORE_NAME].loading);
  const total = useSelector((state: any) => state[ITEMS_LISTS_NAME].total || 0);
  const items = useSelector((state: any) => state[ITEMS_LISTS_NAME].items || []);
  const categories = useSelector((state: any) => state[ITEMS_LISTS_NAME].categories);

  const [isFilled, setIsFilled] = useState(false);

  useMiddleware((payload: any) => {
    dispatch(fetchAsyncThunk(payload));
  });
  useEffect(() => {
    !loading && total === 0 ? setIsFilled(false) : setIsFilled(true);
  }, [loading, total]);

  const [params] = useSearchParams();
  const query = params.get('q');

  return (
    <>
      <div className="list-items__container">
        {isFilled ? <Items query={query} total={parsedNumber(total)} categories={categories} items={items} /> : <NotResult />}
      </div>
    </>
  );
};
