export interface ServerSessionConstantsMessage {
  _messageType: string;
  variables: ServerSessionConstantsMessage.Variables[];
  _isInitialized: boolean;
}; 
export namespace ServerSessionConstantsMessage {
export interface Variables {
  _type: string;
  id: number;
  value: number;
}; 
}; 
