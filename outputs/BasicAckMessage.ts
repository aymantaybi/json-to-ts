export interface BasicAckMessage {
  _messageType: string;
  seq: number;
  lastPacketId: number;
  _isInitialized: boolean;
}; 
