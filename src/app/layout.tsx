import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import "./globals.scss";
import { PropsType } from "./types/types";

export const metadata: Metadata = {
  title: "Cube App",
  description: "Cube App for interview in company JeLeApps",
};


const RootLayout: FC<PropsType> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
