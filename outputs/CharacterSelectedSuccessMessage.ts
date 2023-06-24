export interface CharacterSelectedSuccessMessage {
  _messageType: string;
  infos: CharacterSelectedSuccessMessage.Infos;
  _isInitialized: boolean;
}; 
export namespace CharacterSelectedSuccessMessage {
export interface Infos {
  _type: string;
  id: number;
  level: number;
  name: string;
  entityLook: Infos.EntityLook;
  breed: number;
  sex: boolean;
}; 
export namespace Infos {
export interface EntityLook {
  _type: string;
  bonesId: number;
  skins: number[];
  indexedColors: number[];
  scales: number[];
  subentities: any[];
  speed: number;
}; 
}; 
}; 
