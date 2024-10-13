import './dashboard.css';
import { Lights } from './Lights';
import { Climate } from './Climate';
import { Zaluzie } from './Zaluzie';
import { Energy } from './Energy';

export const Dashboard = () =>{
  return(<main className="dashboard">
  <Lights/>
  <Climate/>
  <Zaluzie otevreno={true}/>
  <Energy/>
  </main>)
}
