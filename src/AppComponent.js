import React from "react";
import Header from "./Components/Header"; //importing elements separtly
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";

export default function App() {
  const [toggle, setToggle] = React.useState(true);
  function onSwitch() {
    setToggle((prevToggle) => !prevToggle);
    console.log(toggle);
  }

  return (
    <div className="flex flex-col h-screen">
      <Header toggle={toggle} setToggle={onSwitch} />
      <MainContent toggle={toggle} />
      <Footer toggle={toggle} />
    </div>
  );
}
