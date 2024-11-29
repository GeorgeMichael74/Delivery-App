import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
   return (
      <div
         className="explore-menu"
         id="explore-menu"
      >
         <h2>Entdecken Sie unser Menü</h2>
         <p className="explore-menu-text">Wählen Sie aus einem vielfältigen Menü mit einer Auswahl köstlicher Gerichte. Unsere Mission ist es, Ihr Verlangen zu stillen und Ihr kulinarisches Erlebnis zu verbessern, eine köstliche Mahlzeit nach der anderen.</p>
         <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                return (
                    <div onClick={() => setCategory(prev=>prev=== item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name} </p>
                    </div>
                )
            })}
         </div>

         <hr/>
      </div>
   );
};

export default ExploreMenu;
