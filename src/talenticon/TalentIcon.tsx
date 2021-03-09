import './TalentIcon.scss';

import { Icon } from '../interfaces';

export interface TalentIconProps{
  icon: Icon;
  handleClick(id: number): void;
  handleRightClick(id: number): void;
}

const TalentIcon: React.FunctionComponent<TalentIconProps> = ({ icon, handleClick, handleRightClick }) => {

  return (
    <div>
      <img
        className="image"
        src={ icon.selected ? icon.selectedUrl : icon.unselectedUrl }
        alt= { icon.alt }
        onClick={ () => handleClick(icon.id) }
        onContextMenu={ () => handleRightClick(icon.id) }
      />
    </div>
  );
}

export default TalentIcon;