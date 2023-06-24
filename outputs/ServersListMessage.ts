export interface ServersListMessage {
  _messageType: string;
  servers: ServersListMessage.Servers[];
  _isInitialized: boolean;
}; 
export namespace ServersListMessage {
export interface Servers {
  _type: string;
  id: number;
  status: number;
  completion: number;
  isSelectable: boolean;
  charactersCount: number;
  date: number;
  _name: string;
  _gameTypeId: number;
}; 
}; 
