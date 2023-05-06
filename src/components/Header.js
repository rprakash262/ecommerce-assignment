import { IoCartOutline } from 'react-icons/io5'


function Header ({ items, selectedTab, selectTab, cartItems, goToCart }) {
  return (
    <div className="header">
      <div className="headerLeft">shop</div>
      <div className="headerCenter">
        {items.length > 0 && (
          items.map(item => (
            <div
              key={item}
              onClick={() => selectTab(item)}
              className={`headerItem ${selectedTab === item ? 'selectedItem' : ''}`}
            >
              {item}
            </div>
          ))
        )}
      </div>
      <div className="headerRight">
        <IoCartOutline
          onClick={goToCart}
          style={{ fontSize: '30px', cursor: 'pointer', fontWeight: 300 }}
        />
        <span>{cartItems.length}</span>
      </div>
    </div>
  )
}

export default Header;