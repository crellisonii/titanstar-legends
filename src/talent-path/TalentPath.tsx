import './TalentPath.scss';

import { Icon } from "../interfaces";
import TalentIcon from "../talenticon/TalentIcon";

export interface TalentPathProps {
  pathNumber: number;
  talentIcons: Icon[];
  handleClick(icon: Icon): void;
  handleRightClick(icon: Icon): void;
}

const TalentPath: React.FC<TalentPathProps> = ({ pathNumber, talentIcons, handleClick, handleRightClick }) => {

  const labelText = `Talent Path ${pathNumber}`;

  return (
    <div className="talent-path">
      <div className="talent-path__label">
        <h3>{ labelText }</h3>
      </div>
        <div className="talent-path__icon">
          <TalentIcon
            icon={ talentIcons[0] }
            handleClick={ () => handleClick(talentIcons[0]) }
            handleRightClick={ () => handleRightClick(talentIcons[0]) }
          />
        </div>
        <div className="talent-path__connector__container">
          <div className="talent-path__connector"></div>
        </div>
        <div className="talent-path__icon">
          <TalentIcon
            icon={ talentIcons[1] }
            handleClick={ () => handleClick(talentIcons[1]) }
            handleRightClick={ () => handleRightClick(talentIcons[1]) }
          />
        </div>
        <div className="talent-path__connector__container">
          <div className="talent-path__connector"></div>
        </div>
        <div className="talent-path__icon">
          <TalentIcon
            icon={ talentIcons[2] }
            handleClick={ () => handleClick(talentIcons[2]) }
            handleRightClick={ () => handleRightClick(talentIcons[2]) }
          />
        </div>
        <div className="talent-path__connector__container">
          <div className="talent-path__connector"></div>
        </div>
        <div className="talent-path__icon">
          <TalentIcon
            icon={ talentIcons[3] }
            handleClick={ () => handleClick(talentIcons[3]) }
            handleRightClick={ () => handleRightClick(talentIcons[3]) }
          />
        </div>
    </div>
  );
}

export default TalentPath;