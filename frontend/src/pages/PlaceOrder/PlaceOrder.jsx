import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext);

  const [data,setData] = useState ({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    HouseNumber:"",
    state:"",
    zipcode:"",
    phone:""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data =>({...data,[name]:value}));
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{

      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    // console.log(orderItems);

    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    };

    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if (response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Fehler");
    }
  }

  // useEffect(()=>{
  //   console.log(data);
  // },[data]);




  return (
    
    <form onSubmit={placeOrder} className='place-order'>

      <div className="place-order-left">
        <p className='title'>Lieferinformationen</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Vorname'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Nachname'/>
        </div>

        <div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='E-Mail-Adresse'/>
        </div>

        <div className="multi-fields">
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Straße'/>
          <input required name='HouseNumber' onChange={onChangeHandler} value={data.HouseNumber} type="text" placeholder='Hausnummer'/>
        </div>

        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Postleitzahl'/>
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='Ort'/>
        </div>

        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Telefon' />
      </div>


      {/* right */}
      <div className="place-order-right">
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
                     <p>{getTotalCartAmount()=== 0?0:2} €</p>
                  </div>
                  <hr />

                  <div className="cart-total-details">
                     <p>Gesamt</p>
                     <p>{getTotalCartAmount()=== 0?0:getTotalCartAmount()+2} €</p>
                  </div>
               </div>

               <button type='submit'>weiter zur Zahlung</button>

            </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
