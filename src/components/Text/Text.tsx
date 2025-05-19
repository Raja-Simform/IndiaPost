import type { ReactNode } from "react";


type TextProps = {
  children: ReactNode;
  italic?: boolean;
  className?: string;
};

export default function Text({ children, italic = false, className = "" }: TextProps) {
  return (
    <span
      className={`font-semibold text-purple-600 ${italic ? "italic" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
