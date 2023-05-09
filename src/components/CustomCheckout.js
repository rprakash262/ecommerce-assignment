function CustomCheckout () {
  return (
    <div className="checkout">
      <form id="checkout-form">
        <input id="card-number" type="text" />
        <label htmlFor="card-number" id="card-number-error"></label>

        <input id="card-cvv" type="text" />
        <label htmlFor="card-cvv" id="card-cvv-error"></label>

        <input id="card-expiry" type="text" />
        <label htmlFor="card-expiry" id="card-expiry-error"></label>

        <input id="pay-button" type="submit" className="btn disabled" value="Pay" disabled="true" />

        <div id="feedback"></div>
      </form>
  </div>
  )
}

export default CustomCheckout;