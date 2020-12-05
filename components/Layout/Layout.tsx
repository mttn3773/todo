import Notify from "components/Notify";
import React, { useState } from "react";
import { useMeQuery } from "src/generated/graphql";
import Nav from "./Nav";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      <Nav />
      <Notify />
      {children}
    </div>
  );
};
