import React from "react";

function Presets() {
  const r = document.querySelector(":root");
  const defaultPreset = document.querySelector(".default");

  

  function changeTheme(e) {
    const { id } = e.target;
    r.style.setProperty("--default-color", id);
    defaultPreset.style.backgroundColor = id;
    //const defaultTheme = getComputedStyle(r).getPropertyValue("--default-color");
    //console.log(defaultTheme)
  }
  return (
    <div className="presets">
      <div className="default"></div>
      <div className="violet" id="blueviolet" onClick={changeTheme}></div>
      <div className="blue" id="#009ddc" onClick={changeTheme}></div>
      <div className="silver" id="#757780" onClick={changeTheme}></div>
      <div className="orange" id="#f26430" onClick={changeTheme}></div>
      <div className="pink" id="#e34a6f" onClick={changeTheme}></div>
    </div>
  );
}

export default Presets;
