export interface CharactersListMessage {
  _messageType: string;
  hasStartupActions: boolean;
  characters: CharactersListMessage.Characters[];
  _isInitialized: boolean;
}; 
export namespace CharactersListMessage {
export interface Characters {
  _type: string;
  id: number;
  level: number;
  name: string;
  entityLook: Characters.EntityLook;
  breed: number;
  sex: boolean;
}; 
export namespace Characters {
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
