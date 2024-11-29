import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

   const navigate = useNavigate();

   return (
      <div className="cart">
         <div className="cart-items">
            <div className="cart-items-title">
               <p>Artikel</p>
               <p>Titel</p>
               <p>Preis</p>
               <p>Menge</p>
               <p>Gesamt</p>
               <p>Entfernen</p>
            </div>

            <br />
            <hr />

            {food_list.map((item, index) => {
               if (cartItems[item._id] > 0) {
                  return (
                     <div key={item._id}>
                        <div
                           className="cart-items-title cart-items-item"
                           key={item._id}
                        >
                           <img
                              src={url+"/images/"+ item.image}
                              alt=""
                           />
                           <p>{item.name}</p>
                           <p>{item.price} €</p>
                           <p>{cartItems[item._id]}</p>
                           <p>{item.price * cartItems[item._id]}</p>
                           <p
                              onClick={() => removeFromCart(item._id)}
                              className="cross"
                           >
                              x
                           </p>
                        </div>
                        <hr />
                     </div>
                  );
               }
            })}
         </div>

         <div className="cart-bottom">
            <div className="cart-total">
               <h2>Warenkorbsummen</h2>
               <div>
                  <div className="cart-total-details">
                     <p>Zwischensumme</p>
                     <p>{getTotalCartAmount()} €</p>
                  </div>
                  <hr />

                  <div className="cart-total-details">
                     <p>Liefergebühr</p>
                     <p>{getTotalCartAmount()===0?0:2} €</p>
                  </div>
                  <hr />

                  <div className="cart-total-details">
                     <p>Gesamt</p>
                     <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} €</p>
                  </div>
               </div>

               <button onClick={() => navigate('/order')}>Zur Kasse</button>

            </div>

            <div className="cart-promocode">
               <div>
                  <p>Wenn Sie einen Aktionscode haben, geben Sie ihn hier ein</p>
                  <div className="cart-promocode-input">
                     <input type="text" placeholder="Aktionscode" />
                     <button>Einsenden</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
