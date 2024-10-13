import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { smartHomeData } from './smartHomeData';

createRoot(
  document.querySelector('#app')
).render(<div className='container'>
  <HomePage />
</div>);
