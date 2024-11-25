import Razorpay from "razorpay";
import { useState } from "react";

const RecieptId = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 500, // Default amount
    currency: "INR",
    receiptId: "123456789",
  });

  const paymentHandler = async () => {
    try {
      // Step 1: Fetch order details from the backend
      const response = await fetch(`http://localhost:3005/order`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });

      const order = await response.json();
      console.log("Order:", order);

      if (!order.id) {
        throw new Error("Failed to create order. Please try again.");
      }

      // Step 2: Dynamic Razorpay options
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY || "your_default_key_here", // Load dynamically
        amount: paymentDetails.amount,
        currency: paymentDetails.currency,
        name: "Your Company Name",
        description: "Thank you for your payment",
        order_id: order.id,
        handler: async function (response) {
          // Step 3: Handle successful payment
          const validationResponse = await fetch(
            "http://localhost:3005/validate",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(response),
            }
          );

          const validationJson = await validationResponse.json();
          console.log("Validation Response:", validationJson);

          if (validationJson.success) {
            alert("Payment Successful! Thank you for your purchase.");
          } else {
            alert("Payment validation failed. Please contact support.");
          }
        },
        prefill: {
          name: "Customer Name", // Dynamic user data
          email: "customer@example.com", // Fetch user email dynamically
          contact: "9999999999", // Dynamic phone number
        },
        theme: {
          color: "#3399cc", // Customize your payment theme color
        },
      };

      const rzp1 = new Razorpay(options);

      // Step 4: Handle payment failure
      rzp1.on("payment.failed", function (response) {
        console.error("Payment Failed:", response.error);
        alert(`Payment Failed: ${response.error.reason}`);
      });

      // Open Razorpay checkout
      rzp1.open();
    } catch (error) {
      console.error("Error in payment process:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <button
        type="submit"
        className="w-full bg-red-500 text-white rounded-lg py-2"
        onClick={paymentHandler}
      >
        Make Payment
      </button>
    </div>
  );
};

export default RecieptId;
