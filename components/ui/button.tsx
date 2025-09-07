import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      "bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 transition-colors",
      className
    )}
    {...props}
  />
);

export { Button };
