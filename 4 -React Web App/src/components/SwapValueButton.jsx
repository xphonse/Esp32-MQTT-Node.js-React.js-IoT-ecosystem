import React from "react";

export const SwapValueButton = () => {
  const  swapValuePetition = () => {
    const url = "http://localhost:3000/swap-value"
    fetch(url, {
          method: "get",
        });
    
  };

  return (
    <div className="mt-4" onClick={swapValuePetition}>
      <button className="btn btn-primary text-white">Swap Value</button>
    </div>
  );
};
