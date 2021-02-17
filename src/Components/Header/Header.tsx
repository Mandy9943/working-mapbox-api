import React from "react";
import { ILanguage } from "../../data";

//importing header styles
import "./Header.css";

interface IProps {
  laguages: ILanguage[];
  selectedlang: ILanguage;
  handleSelectLanguage: (lang: ILanguage) => void;
}

const Header: React.FC<IProps> = (props) => {
  const clickedLang = (lang: ILanguage) => {
    setShowLangs(false);
    props.handleSelectLanguage(lang);
  };

  const [showLangs, setShowLangs] = React.useState(false);

  const handleShowLangs = () => {
    setShowLangs(true);
  };
  return (
    <div className="header">
      <div className="header-right">
        <p className="title">
          <span className="main-title">Cooperacion </span>
          UE-Cuba
        </p>
      </div>
      <div className="header-left">
        <div className="menu">
          <ul className="navbar">
            <li className="nav-item">
              <button className="nav-link">Mapa de Proyectos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Diagrams de Cooperacion</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">ODS</button>
            </li>
          </ul>
        </div>
        <div className="multi-langueage">
          <button className="selected-lang" onClick={handleShowLangs}>
            <img src={props.selectedlang.img} alt="Imagen de Bandera" />
          </button>

          {showLangs && (
            <div className="list-langs">
              {props.laguages.map((lan) => {
                return (
                  <div className="one-lang" key={lan.lang}>
                    <button
                      className="selected-lang"
                      onClick={(e) => clickedLang(lan)}
                    >
                      <img src={lan.img} alt="Imagen de Bandera" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
