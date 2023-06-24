export interface EnabledChannelsMessage {
  _messageType: string;
  channels: number[];
  disallowed: number[];
  _isInitialized: boolean;
}; 
