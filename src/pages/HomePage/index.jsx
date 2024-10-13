import './style.css';
import {Header} from '../../components/Header';
import {Dashboard} from '../../components/Dashboard';

export const HomePage = () => {
  return (
    <>
      <Header titulek='Chytrý dům' />
      <Dashboard/>
    </>
  );
};
