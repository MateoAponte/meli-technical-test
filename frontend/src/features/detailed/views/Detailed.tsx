import { useMiddleware } from '../../../common/hooks/useMiddleware';
import { BreadCrumb } from '../components/BreadCrumb';
import { ProductDetailed } from '../components/ProductDetailed';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetailedThunk } from '../redux/actions';
import { AppDispatch } from '../../../types/AppDispatch';
import { DETAILED_NAME } from '../redux/types';

export const Detailed: React.FC = () => {
  const dispatch = useDispatch()<AppDispatch>;
  const detailed = useSelector((state: any) => state[DETAILED_NAME].detailed);
  useMiddleware((param: string) => {
    dispatch(fetchItemDetailedThunk(param));
  });

  return (
    <div className="detailed-container">
      <BreadCrumb />
      <ProductDetailed item={detailed} />
    </div>
  );
};
