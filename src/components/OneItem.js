function OneItem ({ item, addToCart }) {
	return (
		<div className="oneItemCard">
			<div className="oneItemCardImg">
				<img src={item.itemImage} />
			</div>
			<h4>{item.itemName}</h4>
			<button onClick={addToCart}>Add to Card</button>
		</div>
	)
}

export default OneItem;