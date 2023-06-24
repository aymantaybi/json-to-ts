export interface ChatServerWithObjectMessage {
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
  guildInfo: ChatServerWithObjectMessage.GuildInfo;
  objects: ChatServerWithObjectMessage.Objects[];
  _isInitialized: boolean;
}; 
export namespace ChatServerWithObjectMessage {
export interface GuildInfo {
  _type: string;
  guildId: number;
  guildName: string;
}; 
export interface Objects {
  _type: string;
  position: number;
  objectGID: number;
  effects: Objects.Effects[];
  objectUID: number;
  quantity: number;
}; 
export namespace Objects {
export interface Effects {
  _type: string;
  actionId: number;
  value: number;
}; 
}; 
}; 
