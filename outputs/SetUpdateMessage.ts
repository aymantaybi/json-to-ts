export interface SetUpdateMessage {
  _messageType: string;
  setId: number;
  setObjects: number[];
  setEffects: SetUpdateMessage.SetEffects[];
  _isInitialized: boolean;
}; 
export namespace SetUpdateMessage {
export interface SetEffects {
  _type: string;
  actionId: number;
  value: number;
}; 
}; 
