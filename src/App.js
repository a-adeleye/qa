import "./App.css";
import React from "react";
import Header from "./components/Header";
import AuditForm from "./components/AuditForm";
import Presets from "./components/Presets";



function App() {
  return (
    <div className="App">
      <Header />
      <AuditForm />
      <Presets />
    </div>
  );
}


export default App;
