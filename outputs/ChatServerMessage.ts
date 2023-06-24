export interface ChatServerMessage {
  _messageType: string;
  id: number;
  channel: number;
  content: string;
  urls: any[];
  timestamp: number;
  fingerprint: string;
  senderId: number;
  senderName: string;
  senderAccountId: number;
  guildInfo: ChatServerMessage.GuildInfo;
  _isInitialized: boolean;
}; 
export namespace ChatServerMessage {
export interface GuildInfo {
  _type: string;
  guildId: number;
  guildName: string;
}; 
}; 
