import { IoCheckmarkSharp } from 'react-icons/io5';

function alreadyInCart (itemId, cartItems) {
  let flag = false;

  cartItems.forEach(item => {
    if (item.id === itemId) {
      flag = true;
    }
  })

  return flag;
}

function OneItem ({ item, addToCart, cartItems }) {
  return (
    <div className="oneItemCard">
      <div>
        <div className="oneItemCardImg">
          <img alt="item_img" src={item.itemImage} />
        </div>
        <h4>{item.itemName}</h4>
      </div>
      {!alreadyInCart(item.id, cartItems) &&
        <button onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      }
      {alreadyInCart(item.id, cartItems) && 
        <button style={{ cursor: 'unset' }}>
          Added to Cart
          <span> <IoCheckmarkSharp /></span>
        </button>
      }
    </div>
  )
}

export default OneItem;