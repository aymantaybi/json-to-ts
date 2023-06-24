export interface MapComplementaryInformationsDataMessage {
  _messageType: string;
  subAreaId: number;
  mapId: number;
  houses: any[];
  actors: MapComplementaryInformationsDataMessage.Actors[];
  interactiveElements: MapComplementaryInformationsDataMessage.InteractiveElements[];
  statedElements: MapComplementaryInformationsDataMessage.StatedElements[];
  obstacles: any[];
  fights: any[];
  tacticalModeId: number;
  _isInitialized: boolean;
}; 
export namespace MapComplementaryInformationsDataMessage {
export interface Actors {
  _type: string;
  contextualId: number;
  look: Actors.Look;
  disposition: Actors.Disposition;
  name: string;
  humanoidInfo: Actors.HumanoidInfo;
  accountId: number;
  alignmentInfos: Actors.AlignmentInfos;
}; 
export namespace Actors {
export interface Look {
  _type: string;
  bonesId: number;
  skins: number[];
  indexedColors: number[];
  scales: number[];
  subentities: any[];
  speed: number;
}; 
export interface Disposition {
  _type: string;
  cellId: number;
  direction: number;
}; 
export interface HumanoidInfo {
  _type: string;
  restrictions: HumanoidInfo.Restrictions;
  sex: boolean;
  options: any[];
}; 
export namespace HumanoidInfo {
export interface Restrictions {
  _type: string;
  cantBeAggressed: boolean;
  cantBeChallenged: boolean;
  cantTrade: boolean;
  cantBeAttackedByMutant: boolean;
  cantRun: boolean;
  forceSlowWalk: boolean;
  cantMinimize: boolean;
  cantMove: boolean;
  cantAggress: boolean;
  cantChallenge: boolean;
  cantExchange: boolean;
  cantAttack: boolean;
  cantChat: boolean;
  cantUseObject: boolean;
  cantUseTaxCollector: boolean;
  cantUseInteractive: boolean;
  cantSpeakToNPC: boolean;
  cantChangeZone: boolean;
  cantAttackMonster: boolean;
  cantWalk8Directions: boolean;
}; 
}; 
export interface AlignmentInfos {
  _type: string;
  alignmentSide: number;
  alignmentValue: number;
  alignmentGrade: number;
  characterPower: number;
}; 
}; 
export interface InteractiveElements {
  _type: string;
  elementId: number;
  elementTypeId: number;
  enabledSkills: any[];
  disabledSkills: InteractiveElements.DisabledSkills[];
  ageBonus: number;
  _name: string;
}; 
export namespace InteractiveElements {
export interface DisabledSkills {
  _type: string;
  skillId: number;
  skillInstanceUid: number;
  _cursor: number;
  _name: string;
  _parentJobId: number;
  _levelMin: number;
  _parentJobName: string;
}; 
}; 
export interface StatedElements {
  _type: string;
  elementId: number;
  elementCellId: number;
  elementState: number;
}; 
}; 
