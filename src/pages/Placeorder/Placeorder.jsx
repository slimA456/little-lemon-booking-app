import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'

const Placeorder = () => {
const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <form>
      <div className="place-order">
  <div className="place-order-left">
    <p className='title'>Delivery information</p>
    <div className="multi-fields">
      <input type="text" placeholder='First name'/>
      <input type="text" placeholder='Last name'/>
    </div>
    <input type="text" placeholder='Email address'/>
    <input type="text" placeholder='Street'/>
    <div className="multi-fields">
      <input type="text" placeholder='City'/>
      <input type="text" placeholder='State'/>
    </div>
    <div className="multi-fields">
      <input type="text" placeholder='Zip code'/>
      <input type="text" placeholder='Country'/>
      <input type="text" placeholder='phone'/>
    </div>
  </div>
  
    
  <div className="place-order-right">
  <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <hr />
          <div className="cart-total-details">
    <p>Subtotal</p>
    <p>{getTotalCartAmount()}</p>
   </div>
   <hr />
   <div className="cart-total-details">
<p>Delivery fee</p>
<p>${getTotalCartAmount()===0?0:2}</p>
   </div>
   <hr />
   <div className="cart-total-details">
 <b>Total</b>
 <b>${getTotalCartAmount()===0?0:2}</b>
   </div>


        </div>
        <button>PROCEED TO PAYMENT</button>
       </div>

  </div>


      </div>
    </form>
  )
}

export default Placeorder