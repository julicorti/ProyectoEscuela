import "boxicons";
import "../../CSS/style.css";
import { useEffect, useState } from "react";
// import "../../js/script"
const NavBar = () => {
  const [slider, setSlider] = useState(true);

  useEffect(() => {
    return () => {};
  }, []);

  const sumarContador = () => {
    setSlider(!slider);
  };
  return (
    <>
      <nav className="siderbar close">
        <header style={{ paddingLeft: slider ? "5px" : "300px" }}>
          <div className="icon__menu" onClick={sumarContador}>
            <box-icon id="btn_open" name="menu"></box-icon>
          </div>
        </header>

        <div
          className="menu__side"
          id="menu_side"
          style={{
            width: slider ? "0px" : "300px",
            padding: slider ? "0px " : "20px",
          }}
        >
          <div style={{ textAlign: "center" }} className="option">
            <h1>Levare</h1>
          </div>

          <a href="#" className="selected">
          <div className="option">
          <box-icon
                name="home"
                id="icon"
                type="solid"
                color="#FFFFFF"
              ></box-icon>
              <h2>Años</h2>
            </div>
          </a>
         
          <a href="#" className="selected">
            <div className="option">
              <box-icon id="icon" name="spreadsheet" color="#FFFFFF"></box-icon>
              <h2>Historial</h2>
            </div>
          </a>
          <a href="#" className="selected">
            <div className="option">
              <box-icon id="icon" name="group" color="#FFFFFF"></box-icon>
              <h2>Alumno</h2>
            </div>
          </a>
          <a href="#" className="selected">
            <div className="option">
              <box-icon id="icon" name="undo" color="#FFFFFF"></box-icon>
              <h2>LogOut</h2>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
