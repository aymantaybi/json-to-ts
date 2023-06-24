export interface GameMapMovementMessage {
  _messageType: string;
  keyMovements: number[];
  actorId: number;
  _isInitialized: boolean;
}; 
