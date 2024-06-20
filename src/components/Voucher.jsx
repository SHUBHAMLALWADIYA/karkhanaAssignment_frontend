import React from "react";
import "../css/Voucher.css"

const Voucher = ({ voucher, setVoucher, applyVoucher }) => {
  return (
    <div className="voucher-section">
      <input
        type="text"
        placeholder="Enter voucher code"
        value={voucher}
        onChange={(e) => setVoucher(e.target.value)}
      />
      <button onClick={applyVoucher}>Apply</button>
    </div>
  );
};

export default Voucher;
