import { Icon } from "../interfaces";

export const getIncreaseEffectsStackIcon = (): Icon => {
  return {
    selectedUrl: '../images/increase-effects-stack-selected.png',
    unselectedUrl: '../images/increase-effects-stack-unselected.png',
    alt: 'Increase the number of stacks for status effects',
    selected: false
  }
}

export const getBreathStaminaIcon = (): Icon => {
  return {
    selectedUrl: '../images/breath-stamina-selected.png',
    unselectedUrl: '../images/breath-stamina-unselected.png',
    alt: 'Increase the duration you can hold your breath',
    selected: false
  }
}

export const getCarryFoodIcon = (): Icon => {
  return {
    selectedUrl: '../images/carry-food-upgrade-selected.png',
    unselectedUrl: '../images/carry-food-upgrade-unselected.png',
    alt: 'Increase the amount of food you can carry',
    selected: false
  }
}

export const getDoomIcon = (): Icon => {
  return {
    selectedUrl: '../images/doom-selected.png',
    unselectedUrl: '../images/doom-unselected.png',
    alt: 'When used has 10% chance to kill enemy on hit',
    selected: false
  }
}

export const getFoodEffectivenessIcon = (): Icon => {
  return {
    selectedUrl: '../images/food-effectiveness-selected.png',
    unselectedUrl: '../images/food-effectiveness-unselected.png',
    alt: 'Increase the effectiveness of using food items',
    selected: false
  }
}

export const getIncreaseStealthIcon = (): Icon => {
  return {
    selectedUrl: '../images/increase-stealth-selected.png',
    unselectedUrl: '../images/increase-stealth-unselected.png',
    alt: 'Increase stealth so enemies take longer to react to your presence',
    selected: false
  }
}

export const getLightningIcon = (): Icon => {
  return {
    selectedUrl: '../images/lightning-selected.png',
    unselectedUrl: '../images/lightning-unselected.png',
    alt: 'When activated will add an electric shock to your attacks',
    selected: false
  }
}

export const getPrestigeIcon = (): Icon => {
  return {
    selectedUrl: '../images/prestige-selected.png',
    unselectedUrl: '../images/prestige-unselected.png',
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