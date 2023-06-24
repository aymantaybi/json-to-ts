export interface LoginQueueStatusMessage {
  _messageType: string;
  position: number;
  total: number;
  _isInitialized: boolean;
}; 
