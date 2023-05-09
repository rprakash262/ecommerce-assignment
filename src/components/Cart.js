import { IoCartOutline } from 'react-icons/io5'

function getTotal (cartItems) {
  let total = 0
  cartItems.forEach(item => total = total + Number(item.itemPrice));

  return total;
}

function Cart ({ cartItems, removeItemFromCart, startCheckout }) {
  return (
    <div className="cart">
      {cartItems.length === 0 && (
        <div className="emptyCart">
          <h2>Your Cart is empty</h2>
          <IoCartOutline style={{ fontSize: '80px' }} />
        </div>
      )}
      {cartItems.length > 0 && (
        <div>
          <h4>Your Cart:</h4>
          {cartItems.map(item => (
            <div className="oneCartItem">
              <div className="oneCartItemImg">
                <img alt="item_img" src={item.itemImage} />
              </div>
              <div className="oneCartItemContent">
                <h4>{item.itemName}</h4>
                <h2>Rs. {item.itemPrice}</h2>
                <button
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="checkout">
            <span>Total: {getTotal(cartItems)}</span>
            <button onClick={startCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart;