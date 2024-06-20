import React from "react";
import "../css/Summary.css"

const Summary = ({ total, discount, voucherDiscount, gratuity, finalTotal }) => {
  return (
    <div className="cart-summary">
      <div className="summary-item">
        <p>Subtotal</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className="summary-item">
        <p>Discount (10%)</p>
        <p>-${discount.toFixed(2)}</p>
      </div>
      <div className="summary-item">
        <p>Voucher Discount</p>
        <p>-${voucherDiscount.toFixed(2)}</p>
      </div>
      <div className="summary-item">
        <p>Gratuity</p>
        <p>${gratuity.toFixed(2)}</p>
      </div>
      <div className="summary-item total">
        <p>Total</p>
        <p>${finalTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Summary;
