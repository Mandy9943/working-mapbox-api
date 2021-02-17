import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ILanguage } from "../../data";

//importing styles
import "./Layouts.css";

interface IProps {
  lan: ILanguage;
  listLangs: ILanguage[];
  handleSelectLanguage: (lang: ILanguage) => void;
}

const Layouts: React.FC<IProps> = (props) => {
  return (
    <div className="layout">
      <Header
        handleSelectLanguage={props.handleSelectLanguage}
        laguages={props.listLangs}
        selectedlang={props.lan}
      />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layouts;
