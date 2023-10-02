import { FaReact } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { COMMON_STORE_NAME } from '../../store/types';

export const Loader: React.FC = () => {
  const loading = useSelector((state: any) => {
    console.log(state[COMMON_STORE_NAME]);

    return state[COMMON_STORE_NAME].loading;
  });

  console.log('In component ', loading);

  return loading ? (
    <div className="loader-container">
      <FaReact className="loader-icon" />
    </div>
  ) : null;
};
