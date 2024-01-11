import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import qrcode from "qrcode";
import generatePayload from "promptpay-qr";

const Bill = () => {
  const mobileNumber = "092-989-3405";
  const IdCardNumber = "092-989-3405";
  const [svg, setSvg] = useState("");
  useEffect(() => {
    const total = totalBilling(SubTotal);
    generateQR(total);
  });
  const generateQR = (amount) => {
    const payload = generatePayload(mobileNumber, { amount });
    // Convert to SVG QR Code
    const options = { type: "svg", color: { dark: "#000", light: "#fff" } };
    qrcode.toString(payload, options, async (err, svg) => {
      if (err) return console.log(err);
      await setSvg(svg);
    });
  };

  const handleCheckOut = () => {
    Swal.fire({
      title: "<strong>PromtPay Payment</u></strong>",
      icon: "info",
      html: `
          <img src="data:image/svg+xml;utf8, ${encodeURIComponent(svg)}"/>
          Please use any Bank application scan this Qrcode to pay with Promptpay
        `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
          <i class="fa fa-thumbs-down"></i>
        `,
      cancelButtonAriaLabel: "Thumbs down",
    });
  };

  const carts = useSelector((state) => state.carts);
  const SubTotal = carts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const totalBilling = (SubTotal) => {
    if (SubTotal > 0) return SubTotal + 35;
  };

  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{SubTotal}</p>
      </div>
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">{SubTotal > 0 ? "35฿" : 0}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold"></p>
        <div>
          <p className="mb-1 text-lg font-bold">
            {SubTotal > 0 ? totalBilling(SubTotal) : 0 + "฿"}
          </p>
          <p className="text-sm text-gray-700">including VAT</p>
          <button
            className="mt-6 w-full rounded-md bg-blue-500 py-1 font-medium text-blue-50 hover:bg-blue-500"
            onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bill;
