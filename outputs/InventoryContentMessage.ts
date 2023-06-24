export interface InventoryContentMessage {
  _messageType: string;
  objects: InventoryContentMessage.Objects[];
  kamas: number;
  _isInitialized: boolean;
}; 
export namespace InventoryContentMessage {
export interface Objects {
  _type: string;
  position: number;
  objectGID: number;
  effects: Objects.Effects[];
  objectUID: number;
  quantity: number;
}; 
export namespace Objects {
export interface Effects {
  _type: string;
  actionId: number;
  value: number;
}; 
}; 
}; 
