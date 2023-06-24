export interface HelloConnectMessage {
  _messageType: string;
  salt: string;
  key: number[];
  _isInitialized: boolean;
}; 
