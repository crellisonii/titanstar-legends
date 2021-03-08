import { Icon } from "../interfaces";
import breathSelectedIcon from '../images/breath-stamina-selected.png';
import breathUnselectedIcon from '../images/breath-stamina-unselected.png';
import carryFoodSelectedIcon from '../images/carry-food-upgrade-selected.png';
import carryFoodUnselectedIcon from '../images/carry-food-upgrade-unselected.png';
import doomSelectedIcon from '../images/doom-selected.png';
import doomUnselectedIcon from '../images/doom-unselected.png';
import foodEffectSelectedIcon from '../images/food-effectiveness-selected.png';
import foodEffectUnselectedIcon from '../images/food-effectiveness-unselected.png';
import increaseEffectSelectedIcon from '../images/increase-effects-stack-selected.png';
import increaseEffectUnselectedIcon from '../images/increase-effects-stack-unselected.png';
import increaseStealthSelectedIcon from '../images/increase-stealth-selected.png';
import increaseStealthUnselecedIcon from '../images/increase-stealth-unselected.png';
import lightningSelectedIcon from '../images/lightning-selected.png';
import lightningUnselectedIcon from '../images/lightning-unselected.png'
import prestigeSelectedIcon from '../images/prestige-selected.png';
import prestigeUnselectedIcon from '../images/prestige-unselected.png';

export const getIncreaseEffectsStackIcon = (): Icon => {
  return {
    selectedUrl: increaseEffectSelectedIcon,
    unselectedUrl: increaseEffectUnselectedIcon,
    alt: 'Increase the number of stacks for status effects',
    selected: false
  }
}

export const getBreathStaminaIcon = (): Icon => {
  return {
    selectedUrl: breathSelectedIcon,
    unselectedUrl: breathUnselectedIcon,
    alt: 'Increase the duration you can hold your breath',
    selected: false
  }
}

export const getCarryFoodIcon = (): Icon => {
  return {
    selectedUrl: carryFoodSelectedIcon,
    unselectedUrl: carryFoodUnselectedIcon,
    alt: 'Increase the amount of food you can carry',
    selected: false
  }
}

export const getDoomIcon = (): Icon => {
  return {
    selectedUrl: doomSelectedIcon,
    unselectedUrl: doomUnselectedIcon,
    alt: 'When used has 10% chance to kill enemy on hit',
    selected: false
  }
}

export const getFoodEffectivenessIcon = (): Icon => {
  return {
    selectedUrl: foodEffectSelectedIcon,
    unselectedUrl: foodEffectUnselectedIcon,
    alt: 'Increase the effectiveness of using food items',
    selected: false
  }
}

export const getIncreaseStealthIcon = (): Icon => {
  return {
    selectedUrl: increaseStealthSelectedIcon,
    unselectedUrl: increaseStealthUnselecedIcon,
    alt: 'Increase stealth so enemies take longer to react to your presence',
    selected: false
  }
}

export const getLightningIcon = (): Icon => {
  return {
    selectedUrl: lightningSelectedIcon,
    unselectedUrl: lightningUnselectedIcon,
    alt: 'When activated will add an electric shock to your attacks',
    selected: false
  }
}

export const getPrestigeIcon = (): Icon => {
  return {
    selectedUrl: prestigeSelectedIcon,
    unselectedUrl: prestigeUnselectedIcon,
    alt: 'Gives a permanent increase to your Prestige level',
    selected: false
  }
}

export const getTalentPath1Icons = (): Icon[] => {
  return [getIncreaseEffectsStackIcon(), getCarryFoodIcon(), getFoodEffectivenessIcon(), getPrestigeIcon()];
}

export const getTalentPath2Icons = (): Icon[] => {
  return [getIncreaseStealthIcon(), getBreathStaminaIcon(), getLightningIcon(), getDoomIcon()];
}