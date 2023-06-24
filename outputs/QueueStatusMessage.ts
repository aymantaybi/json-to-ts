export interface QueueStatusMessage {
  _messageType: string;
  position: number;
  total: number;
  _isInitialized: boolean;
}; 
