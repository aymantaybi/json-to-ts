export interface GameFightOptionStateUpdateMessage {
  _messageType: string;
  fightId: number;
  teamId: number;
  option: number;
  state: boolean;
  _isInitialized: boolean;
}; 
