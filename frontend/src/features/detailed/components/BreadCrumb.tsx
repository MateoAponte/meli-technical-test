const validateLastItem = (categories: any, index: number) => {
  return index === categories.length - 1;
};
export const BreadCrumb: React.FC<any> = ({ categories = [] }) => {
  return (
    <>
      <div className="breadcrumb">
        <span className="breadcrumb__return">Volver al listado</span>
        {categories.map((item: string, index: number) => (validateLastItem(categories, index) ? <span>{item} &gt;</span> : <span> {item} </span>))}
        <span></span>
      </div>
    </>
  );
};
