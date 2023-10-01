import { Link } from 'react-router-dom';
import { LinksHeader } from '../../constants/links';
import { CiLocationOn } from 'react-icons/ci';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { NavBarSearcher } from './NavBarSearcher';

export const NavBar: React.FC = () => {
  return (
    <header className="header-container">
      <section className="header-row">
        <div className="header__logo">
          <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png" alt="meli-logo" />
        </div>
        <div className="header__searcher">
          <NavBarSearcher />
        </div>
        <div className="header__promo">
          <img src="https://http2.mlstatic.com/D_NQ_845788-MLA71637164141_092023-OO.webp" alt="meli-promo" />
        </div>
      </section>
      <section className="header-row">
        <div className="header__location">
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
            <Link className="header__link" to={item.path}>
              {item.text}
            </Link>
          ))}
        </div>
        <div className="header__account">
          <div className="header__account-section">
            <Link className="header__link" to={'/'}>
              Crea tu cuenta
            </Link>
          </div>
          <div className="header__account-section">
            <Link className="header__link" to={'/'}>
              Ingresa
            </Link>
          </div>
          <div className="header__account-section">
            <Link className="header__link" to={'/'}>
              Mis Compras
            </Link>
          </div>
          <div className="header__account-section">
            <Link className="header__link header__link--icon" to={'/'}>
              <LiaShoppingCartSolid />
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};
