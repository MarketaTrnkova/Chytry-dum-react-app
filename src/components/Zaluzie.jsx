import { useState } from "react";
import "./zaluzie.css";

export const Zaluzie = ({otevreno}) =>{
  const imgOtevreno = './images/blinds-open.svg'; 
  const imgZavreno = './images/blinds-closed.svg'; 
  
  const [obrazek, setObrazek] = useState(otevreno ? imgOtevreno : imgZavreno);
  const [cssTridaOtevreno, setCssTridaOtevreno] = useState("button--active");
  const [cssTridaZavreno, setCssTridaZavreno] = useState("");


  const buttonHandler = (e) =>{
    const jeAktivni = e.target.classList.contains("button--active");
    if (!jeAktivni && e.target.textContent.trim() == "Otevřeno")
    {
      setObrazek(imgOtevreno);
      setCssTridaZavreno("");
      setCssTridaOtevreno("button--active");
      }else if (!jeAktivni && e.target.textContent.trim() == "Zavřeno"){
        setObrazek(imgZavreno);
        setCssTridaOtevreno("");
        setCssTridaZavreno("button--active");
      }
    };

  return(
    <div className="blinds">
      <div className="blinds__icon">
        <img src={obrazek}/>
      </div>
      <div className="blinds__name">
        Žaluzie
      </div>
      <div className="blinds__controls">
        <button onClick={buttonHandler} className={`button ${cssTridaOtevreno}`}>Otevřeno</button>
        <button onClick={buttonHandler} className={`button ${cssTridaZavreno}`}>Zavřeno</button>
      </div>
    </div>
  )
}