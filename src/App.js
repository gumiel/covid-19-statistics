import React from "react";
import Header from "./shared/components/layout/Header";
import Content from "./shared/components/layout/Content";

function App(props) {
  return (
    <>
      <Header></Header>
      <Content>{props.children}</Content>
    </>
  );
}

export default App;
