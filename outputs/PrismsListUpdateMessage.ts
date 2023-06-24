export interface PrismsListUpdateMessage {
  _messageType: string;
  prisms: PrismsListUpdateMessage.Prisms[];
  _isInitialized: boolean;
}; 
export namespace PrismsListUpdateMessage {
export interface Prisms {
  _type: string;
  subAreaId: number;
  allianceId: number;
  worldX: number;
  worldY: number;
  mapId: number;
  prism: Prisms.Prism;
  enrichData: Prisms.EnrichData;
}; 
export namespace Prisms {
export interface Prism {
  _type: string;
  typeId: number;
  state: number;
  nextVulnerabilityDate: number;
  placementDate: number;
  alliance: Prism.Alliance;
}; 
export namespace Prism {
export interface Alliance {
  _type: string;
  allianceId: number;
  allianceTag: string;
  allianceName: string;
  allianceEmblem: Alliance.AllianceEmblem;
}; 
export namespace Alliance {
export interface AllianceEmblem {
  _type: string;
  symbolShape: number;
  symbolColor: number;
  backgroundShape: number;
  backgroundColor: number;
}; 
}; 
}; 
export interface EnrichData {
  subAreaName: string;
  isConquestVillage: boolean;
  areaName: string;
}; 
}; 
}; 
