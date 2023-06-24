export interface GameRolePlayShowActorMessage {
  _messageType: string;
  informations: GameRolePlayShowActorMessage.Informations;
  _isInitialized: boolean;
}; 
export namespace GameRolePlayShowActorMessage {
export interface Informations {
  _type: string;
  contextualId: number;
  look: Informations.Look;
  disposition: Informations.Disposition;
  staticInfos: Informations.StaticInfos;
  ageBonus: number;
  lootShare: number;
  alignmentSide: number;
  keyRingBonus: boolean;
  hasHardcoreDrop: boolean;
  scaleLevel: number;
}; 
export namespace Informations {
export interface Look {
  _type: string;
  bonesId: number;
  skins: any[];
  indexedColors: any[];
  scales: number[];
  subentities: any[];
  speed: number;
}; 
export interface Disposition {
  _type: string;
  cellId: number;
  direction: number;
}; 
export interface StaticInfos {
  _type: string;
  mainCreatureLightInfos: StaticInfos.MainCreatureLightInfos;
  underlings: any[];
}; 
export namespace StaticInfos {
export interface MainCreatureLightInfos {
  _type: string;
  creatureGenericId: number;
  grade: number;
  level: number;
  xp: number;
  staticInfos: MainCreatureLightInfos.StaticInfos;
}; 
export namespace MainCreatureLightInfos {
export interface StaticInfos {
  nameId: string;
  level: number;
  isMiniBoss: boolean;
  isBoss: boolean;
  xp: number;
}; 
}; 
}; 
}; 
}; 
