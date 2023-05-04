function Header ({ items }) {
	return (
		<div className="header">
			<div className="headerLeft">shop</div>
			<div className="headerCenter">
				{items.length > 0 && (
					items.map(item => (
						<div className="headerItem" key={item}>{item}</div>
					))
				)}
			</div>
			<div className="headerRight">cart</div>
		</div>
	)
}

export default Header;