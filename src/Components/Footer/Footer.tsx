import React from "react";
import "./Footer.css";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="box1">
        <div className="footer-title">
          Delegation of the European Union to Cuba
        </div>
        <div className="footer-links small-text">
          <div className="web-address">
            https://eeas.europa.eu/delefations/cuba_en
          </div>
          <div className="facebook"></div>
          <div className="other-link"></div>
        </div>
      </div>
      <div className="box2 small-text">
        Decline, ther is a short text in here
      </div>
      <div className="box3 small-text">
        <div className="address">
          Sth Avenue N 2007 esq 22, Miramar, Havana, Cuba
        </div>
        <div className="phone">+ 53 72040327</div>
        <div className="email">DELEFATION-CUBA@eeas.europa.eu</div>
      </div>
    </div>
  );
};

export default Footer;
