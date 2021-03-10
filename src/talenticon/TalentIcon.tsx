import './TalentIcon.scss';

import { Icon } from '../interfaces';
import { useState } from 'react';

export interface TalentIconProps{
  icon: Icon;
  handleClick(icon: Icon): void;
  handleRightClick(icon: Icon): void;
}

const TalentIcon: React.FunctionComponent<TalentIconProps> = ({ icon, handleClick, handleRightClick }) => {

  const [iconSrc, setIconSrc] = useState(icon.selected ? icon.selectedUrl : icon.unselectedUrl);

  return (
    <div className="image">
      <img
        className={ icon.selected ? 'selected' : '' }
        src={ iconSrc }
        alt= { icon.alt }
        onClick={ () => handleClick(icon) }
        onContextMenu={ () => handleRightClick(icon) }
        onMouseEnter={ () => !icon.selected ? setIconSrc(icon.selectedUrl) : ''}
        onMouseLeave={ () => !icon.selected ? setIconSrc(icon.unselectedUrl) : ''}
      />
    </div>
  );
}

export default TalentIcon;