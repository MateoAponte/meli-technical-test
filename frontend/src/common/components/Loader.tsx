import { FaReact } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { COMMON_STORE_NAME } from '../../store/common/types';

export const Loader: React.FC = () => {
  const loading = useSelector((state: any) => {
    return state[COMMON_STORE_NAME].loading;
  });

  return loading ? (
    <div className="loader-container">
      <FaReact className="loader-icon" />
    </div>
  ) : null;
};
