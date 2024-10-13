import { useState } from 'react';
import './climate.css';

export const Climate = () => {
  const [teplota, setTeplota] = useState(24);

return(
  <div className="climate">
    <div className="climate__icon">
      <img src="../images/temp.svg" alt="teplota" />
    </div>
    <div className="climate__content">
        <div className="climate__temperature">{teplota}°C</div>
        <div className="climate__humidity">Vlhkost vzduchu 51%</div>
    </div>
    <div className="climate__controls">
      <button onClick={()=>{setTeplota(teplota+1)}} className="button">+</button>
      <button onClick={()=>{setTeplota(teplota-1)}}className="button">-</button>
    </div>
    </div>

)}