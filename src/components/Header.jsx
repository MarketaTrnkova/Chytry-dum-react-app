import './header.css';

export const Header = ({titulek}) => {
  return(<header>
    <h1 className='header__title'>{titulek}</h1>
  </header>)
}