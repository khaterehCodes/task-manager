import { HtmlHTMLAttributes, ReactNode } from "react";

export type Ptype = {
  children: ReactNode;
} & HtmlHTMLAttributes<HTMLParagraphElement>;
