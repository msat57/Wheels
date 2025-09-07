import React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition",
        className
      )}
      {...props}
    />
  );
}
