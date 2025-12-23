import React from "react";

export default function CVSection({ title, children }) {
  if (React.Children.count(children) === 0) return null;
  return (
    <div className="mb-5">
      <h3 className="font-bold text-[11pt] uppercase border-b border-black mb-3 pb-0.5">
        {title}
      </h3>
      {children}
    </div>
  );
}
