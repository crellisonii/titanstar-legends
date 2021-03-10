import './Header.scss';

export interface HeaderProps {
  
}
 
const Header: React.FunctionComponent<HeaderProps> = () => {

  const headerText = 'TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000';

  return (
    <div className="header">
      <h1 className="header__text">{ headerText }</h1>
    </div>
  );
}
 
export default Header;

