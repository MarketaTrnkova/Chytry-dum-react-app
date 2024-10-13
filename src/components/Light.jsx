import './light.css';
import { useState } from 'react';

export const Light = ({rozsviceno, name}) =>{
  const rozsvicenoImg = '../images/light-on.svg';
  const zhasnutoImg = '../images/light-off.svg';

  const [rozsvicenoAktualizovanaHodnota, setRozsviceno] = useState(rozsviceno);
  const[obrazek, setObrazek] = useState(rozsvicenoAktualizovanaHodnota ? rozsvicenoImg : zhasnutoImg );

  const lightHandler = () =>{
    setRozsviceno(!rozsvicenoAktualizovanaHodnota);
    setObrazek(rozsvicenoAktualizovanaHodnota ? rozsvicenoImg : zhasnutoImg );
  }

  return(<div className='light' onClick={lightHandler}>
    <div className='light__icon' >
      <img  src={obrazek}/>
    </div>
    <div className='light__name'>{name}</div>
  </div>)
}