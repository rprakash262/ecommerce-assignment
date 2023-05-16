function CustomCheckout () {
  return (
    <div className="customCheckout">
      <input id="cardNumber" type="text" />
      <input id="cardCvv" type="text" />
      <input id="cardExpiry" type="text" />
      <button>Pay</button>
      <div id="feedback"></div>
  </div>
  )
}

export default CustomCheckout;