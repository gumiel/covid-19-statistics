import React from "react";

const Content = (props) => {
  const { children } = props;
  return <main className="container">{children}</main>;
};

export default Content;
