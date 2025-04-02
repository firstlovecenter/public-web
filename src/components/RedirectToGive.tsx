import { useEffect } from 'react';

const RedirectToGive = () => {
  useEffect(() => {
    console.log("Redirecting to the giving page...");
    window.location.href = "https://paystack.com/pay/firstlovecenter";
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-white text-center">
        Redirecting...
      </div>
    </div>
  );
};

export default RedirectToGive;
