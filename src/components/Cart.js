import { IoCloseSharp, IoCartOutline } from 'react-icons/io5'


function Cart ({ cartItems, removeItemFromCart }) {
  return (
    <div className="cart">
      {cartItems.length === 0 && (
        <div className="emptyCart">
          <h2>Your Cart is empty</h2>
          <IoCartOutline style={{ fontSize: '80px' }} />
        </div>
      )}
      {cartItems.length > 0 && cartItems.map(item => (
        <div className="oneCartItem">
          <div className="oneCartItemImg">
            <img alt="item_img" src={item.itemImage} />
          </div>
          <div className="oneCartItemContent">
            <h4>{item.itemName}</h4>
            <h2>Rs. {item.itemPrice}</h2>
            <button
              onClick={() => removeItemFromCart(item.id)}
            >Remove</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart;