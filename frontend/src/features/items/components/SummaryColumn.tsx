export const SummaryColumn: React.FC<any> = ({ search, total }) => {
  return (
    <>
      <div className="summary__main-info">
        <h1 className="summary__title"> {search} </h1>
        <span className="summary__helper"> {total} resultados </span>
      </div>
      <div className="summary__filters"></div>
      <div className="summary__categories"></div>
    </>
  );
};
