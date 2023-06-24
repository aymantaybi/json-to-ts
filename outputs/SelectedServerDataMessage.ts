export interface SelectedServerDataMessage {
  _messageType: string;
  serverId: number;
  address: string;
  port: number;
  canCreateNewCharacter: boolean;
  ticket: string;
  _isInitialized: boolean;
  _access: string;
}; 
