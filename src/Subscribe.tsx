// Example: SubscribeComponent.jsx
import  { useState } from "react";

function SubscribeComponent() {
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    // You can add validation here if needed
    setMessage("Mobile number saved successfully");
    setMobile(""); // Clear input if you want
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SubscribeComponent;