"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <NextThemeProvider defaultTheme="dark">{children}</NextThemeProvider>;
};
export default ThemeProvider;
