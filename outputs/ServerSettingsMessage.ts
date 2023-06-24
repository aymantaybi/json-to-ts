export interface ServerSettingsMessage {
  _messageType: string;
  lang: string;
  community: number;
  gameType: number;
  _isInitialized: boolean;
}; 
