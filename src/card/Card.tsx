import './Card.scss';

import React, { useState } from 'react';
import { canSelectIcon, canUnselectIcon, selectIcon, unselectIcon } from '../helpers/icon-select.helper';

import Header from '../header/Header';
import { Icon } from '../interfaces';
import PointsCounter from '../points-counter/PointsCounter';
import TalentIcon from '../talenticon/TalentIcon';
import TalentPath from '../talent-path/TalentPath';
import { getAllTalents } from '../helpers/icons.helper';

export interface CardProps {

}

const Card: React.FC<CardProps> = () => {

  const MAX_POINTS = 6;
  const [spentPoints, setSpentPoints] = useState(0);

  const [talentPaths, setTalentPaths] = useState(getAllTalents());

  const handleTalentPathClick = (icon: Icon, index: number) => {
    const talentPath = talentPaths[index];
    if (spentPoints !== MAX_POINTS && canSelectIcon(talentPath, talentPath.indexOf(icon))) {
      talentPaths[index] = [...selectIcon(talentPath, icon.id)];
      setTalentPaths([...talentPaths]);
      setSpentPoints(spentPoints + 1);
    }
  }

  const handleTalentPathRightClick = (icon: Icon, index: number) => {
    const talentPath = talentPaths[index];
    if (spentPoints !== 0 && canUnselectIcon(talentPath, talentPath.indexOf(icon))) {
      talentPaths[index] = [...unselectIcon(talentPath, icon.id)];
      setSpentPoints(spentPoints - 1);
      setTalentPaths([...talentPaths]);
    }
  }

  return (
    <div className="card">
      <div className="card__header">
        <Header />
      </div>
      <div className="card__content">
        <div className="card__talent-path-container">
          { talentPaths.map((talentPath, index) => (
            <div key={ index } className="card__talent-path">
              <TalentPath
                pathNumber={ index + 1 }
                talentIcons={ talentPath }
                handleClick={ (icon: Icon) => handleTalentPathClick(icon, index) }
                handleRightClick={ (icon: Icon) => handleTalentPathRightClick(icon, index) }
              />
            </div>
          ))}
        </div>
        <div className="card__counter">
          <PointsCounter maxPoints={ MAX_POINTS } spentPoints={ spentPoints }/>
        </div>
      </div>
    </div>
  );
}

export default Card;