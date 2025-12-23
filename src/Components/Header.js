import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="img" src={LOGO_URL} />
        <ul className="list">
          <li>home</li>
          <li>About us</li>
          <li>Contct us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
