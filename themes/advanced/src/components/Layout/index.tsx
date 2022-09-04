import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): React.ReactElement => (
  <>
    <div>TOP BAR</div>
    <div>{children}</div>
    <div>FOOTER</div>
  </>
);

export default Layout;
