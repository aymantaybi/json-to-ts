export interface ProtocolRequired {
  _messageType: string;
  requiredVersion: number;
  currentVersion: number;
  _isInitialized: boolean;
}; 
