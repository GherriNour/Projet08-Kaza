import logo from "../../assets/images/logo/LOGO.svg";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__logo
">
        <img className="logo" src={logo} alt="Logo de l'agence kasa" />
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}
