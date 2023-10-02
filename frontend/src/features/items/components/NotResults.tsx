import { MdSearchOff } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const NotResult: React.FC = () => {
  return (
    <>
      <div className="not-results">
        <div className="not-results-container">
          <div className="not-results__icon">
            <MdSearchOff />
          </div>
          <div className="not-results__info">
            <h3 className="not-results__info-title">No hay publicaciones que coincidan con tu búsqueda.</h3>
            <ul className="not-results__info-list">
              <li>
                <strong className="not-results__info-list--bolder">Revisa la ortografía</strong> de la palabra.
              </li>
              <li>
                Utiliza <strong className="not-results__info-list--bolder">palabras más genéricas</strong> o menos palabras.
              </li>
              <li>
                <Link className="not-results__info-list--link" to={'/'}>
                  Navega por las categorías
                </Link>
                para encontrar un producto similar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
