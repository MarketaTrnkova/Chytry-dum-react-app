import './lights.css';
import { Light } from './Light';
import { smartHomeData } from '../smartHomeData';

export const Lights = () =>{
  const poleKomponent = smartHomeData.lights.map((lightData)=>{
    return(<Light key={lightData.name} rozsviceno={(lightData.state == "on")? true : false} name={lightData.name} />);
  });

  return(<div className="lights">
    {poleKomponent}
  </div>);
}