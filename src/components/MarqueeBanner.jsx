import React, { useState } from "react";

const MarqueeBanner = ({
  items = [
    "FREE SHIPPING ON ORDERS ABOVE ₹2000",
    "★",
    "NEW DROP: VINTAGE CAPS COLLECTION",
    "★",
    "USE CODE KULTURE10 FOR 10% OFF",
    "★",
    "FOLLOW US @KULTUREVINTAGE",
    "★",
    "HANDPICKED STREETWEAR",
    "★",
  ],
  speed = 30,
  direction = "left",
  className = "",
  bg = "bg-[#0a0a0a]",
  textColor = "text-neutral-300",
  separatorColor = "text-red-600",
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const content = items.join(" \u00A0\u00A0 ");
  const duplicatedContent = `${content} \u00A0\u00A0 ${content} \u00A0\u00A0 ${content}`;

  const animationDirection = direction === "right" ? "reverse" : "normal";

  return (
    <div
      className={`w-full overflow-hidden border-b border-neutral-900 ${bg} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className="flex whitespace-nowrap py-3"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection,
          animationPlayState: isPaused ? "paused" : "running",
          width: "max-content",
        }}
      >
        <span className={`text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase ${textColor} px-2`}>
          {duplicatedContent}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
