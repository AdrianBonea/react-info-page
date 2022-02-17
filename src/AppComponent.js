import React from "react";
import Header from "./Components/Header"; //importing elements separtly
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
