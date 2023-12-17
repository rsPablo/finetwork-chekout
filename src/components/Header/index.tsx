import "./styles.scss";

const Header = () => {
  return (
    <article className="header-container">
      <div className="header-container__menu">
        <div className="header-container__menu-item-active">Particulares</div>
        <div className="header-container__menu-item">Autónomo y empresa</div>
      </div>
      <div className="header-container__phone">
        <div className="header-container__phone__call">¿Te llamamos?</div>
        <div className="header-container__phone__callus">Llámanos al 1777</div>
      </div>
    </article>
  );
};

export default Header;
