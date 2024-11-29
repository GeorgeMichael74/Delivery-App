import React from "react";
import "./Header.css";

const Header = () => {
   return (
      <div className="header">
         <div className="header-contents">
            <h2>Bestellen Sie hier Ihr Lieblingsessen</h2>
            <p>Wählen Sie aus einer vielfältigen Speisekarte mit einer köstlichen Auswahl an Gerichten, die mit den besten Zutaten und kulinarischer Expertise zubereitet werden.</p>
            <p>Unsere Mission ist es, Ihre Gelüste zu stillen und Ihr kulinarisches Erlebnis zu verbessern.</p>
            <button>Ansicht-Menü</button>
         </div>
      </div>
   );
};

export default Header;
