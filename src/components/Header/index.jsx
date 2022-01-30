// css
import "./header.css";
// images
import trollFace from "../../assets/imgs/troll-face.png";
import final from "../../assets/imgs/final.png";

function Header() {
  return (
    <header>
      <nav className={final}>
        <img className="header__logo" src={trollFace} alt="troll face logo" />
        <p className="header__logo-name">Meme Generator</p>
      </nav>
    </header>
  );
}

export { Header };
