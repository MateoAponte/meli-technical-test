import { Link } from 'react-router-dom';
import { LinksHeader } from '../../constants/links';
import { CiLocationOn } from 'react-icons/ci';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { NavBarSearcher } from './NavBarSearcher';

const createAccountLink = process.env.REACT_APP_CREATE_ACCOUNT_LINK;
const promoLink = process.env.REACT_APP_PROMO_LINK;
const addLocationLink = process.env.REACT_APP_ADD_LOCATION_LINK;
const loginLink = process.env.REACT_APP_LOG_IN_LINK;

const navigateTo = (location: string) => {
  window.location.href = location;
};

export const NavBar: React.FC = () => {
  return (
    <header className="header-container">
      <section className="header-row">
        <div className="header__logo" onClick={() => navigateTo(`/`)}>
          <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" alt="meli-logo" />
        </div>
        <div className="header__searcher">
          <NavBarSearcher />
        </div>
        <div className="header__promo" onClick={() => navigateTo(`${promoLink}`)}>
          <img src="https://http2.mlstatic.com/D_NQ_845788-MLA71637164141_092023-OO.webp" alt="meli-promo" />
        </div>
      </section>
      <section className="header-row">
        <div className="header__location" onClick={() => navigateTo(`${addLocationLink}`)}>
          <div className="header__location-icon">
            <CiLocationOn />
          </div>
          <div className="header__location-text">
            <span className="text-ligther">Ingresa tu</span>
            <span className="text-medium">Ubicación</span>
          </div>
        </div>
        <div className="header__links">
          {LinksHeader.map((item: any) => (
            <Link className="header__link" key={item.text} to={item.path}>
              {item.text}
            </Link>
          ))}
        </div>
        <div className="header__account">
          <div className="header__account-section">
            <Link className="header__link" to={`${createAccountLink}`}>
              Crea tu cuenta
            </Link>
          </div>
          <div className="header__account-section">
            <Link className="header__link" to={`${loginLink}`}>
              Ingresa
            </Link>
          </div>
          <div className="header__account-section">
            <Link className="header__link" to={`${createAccountLink}`}>
              Mis Compras
            </Link>
          </div>
          <div className="header__account-section">
            <Link className="header__link header__link--icon" to={`${createAccountLink}`}>
              <LiaShoppingCartSolid />
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};
