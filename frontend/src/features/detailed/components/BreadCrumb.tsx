import { Link } from 'react-router-dom';

const validateLastItem = (categories: any, index: number) => {
  return index === categories.length - 1;
};
export const BreadCrumb: React.FC<any> = ({ categories = [] }) => {
  return (
    <>
      <div className="breadcrumb">
        <Link to={'/'} className="breadcrumb__return">
          Volver
        </Link>
        <span className="breadcrumb__divider">|</span>
        {categories.map((item: string, index: number) => (
          <Link className="breadcrumb__link" to={'/'}>
            {validateLastItem(categories, index) ? <span> {item} </span> : <span>{item} &gt;</span>}
          </Link>
        ))}
      </div>
    </>
  );
};
