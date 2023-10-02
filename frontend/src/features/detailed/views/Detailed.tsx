import { useMiddleware } from '../../../common/hooks/useMiddleware';
import { BreadCrumb } from '../components/BreadCrumb';
import { ProductDetailed } from '../components/ProductDetailed';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemDetailedThunk } from '../redux/actions';
import { AppDispatch } from '../../../types/AppDispatch';
import { DETAILED_NAME } from '../redux/types';
import { useEffect } from 'react';
import { updateAuthor, updateCategory, updateDetailed, updateSelectedThumbnail } from '../redux/slice';

export const Detailed: React.FC = () => {
  const dispatch = useDispatch()<AppDispatch>;
  const detailed = useSelector((state: any) => state[DETAILED_NAME].detailed);
  const category = useSelector((state: any) => [state[DETAILED_NAME].category]);
  useMiddleware((param: string) => {
    dispatch(fetchItemDetailedThunk(param));
  });

  useEffect(() => {
    return () => {
      dispatch(updateAuthor({} as any));
      dispatch(updateCategory([] as any));
      dispatch(updateDetailed({} as any));
      dispatch(updateSelectedThumbnail('' as any));
    };
  }, []);

  return (
    <div className="detailed-container">
      <BreadCrumb categories={category} />
      <ProductDetailed item={detailed} />
    </div>
  );
};
