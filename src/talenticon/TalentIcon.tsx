import './TalentIcon.scss';

import { Icon } from "../interfaces";

export interface TalentIconProps{
  icon: Icon
}

const TalentIcon: React.FunctionComponent<TalentIconProps> = ({ icon }) => {

  return (
    <div>
      <img className="image" src={ icon.selectedUrl } alt= { icon.alt }/>
    </div>
  );
}

export default TalentIcon;