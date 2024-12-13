// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";

const TimerButton = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isDisabled) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsDisabled(false);
            return 30; // Reset timer for next cycle
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDisabled]);

  const handleClick = () => {
    alert("Button clicked!");
    setIsDisabled(true); // Disable the button after click
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleClick} disabled={isDisabled}>
        {isDisabled ? `Wait ${timer}s` : "Click Me"}
      </button>
    </div>
  );
};

export default TimerButton;
