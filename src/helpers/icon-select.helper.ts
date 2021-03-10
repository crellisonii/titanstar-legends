import { Icon } from "../interfaces"

export const selectIcon = (talentPath: Icon[], iconId: number): Icon[] => {
  return talentPath.map(talent => {
    if (talent.id === iconId) {
      talent.selected = !talent.selected;
    }
    return talent;
  });
}

export const canSelectIcon = (talentPath: Icon[], index: number): boolean => {
  return !talentPath[index].selected && isPreviousSelected(talentPath, index);
}

const isPreviousSelected = (talentPath: Icon[], index: number): boolean => {
  if (index === 0) {
    return true;
  }
  return talentPath[index - 1].selected;
}

export const unselectIcon = (talentPath: Icon[], iconId: number): Icon[] => {
  return talentPath.map(talent => {
    if (talent.id === iconId) {
      talent.selected = !talent.selected;
    }
    return talent;
  });
}

export const canUnselectIcon = (talentPath: Icon[], index: number): boolean => {
  return talentPath[index].selected && !isNextSelected(talentPath, index);
}

const isNextSelected = (talentPath: Icon[], index: number): boolean => {
  if (index === talentPath.length - 1) {
    return false;
  }
  return talentPath[index + 1].selected;
}