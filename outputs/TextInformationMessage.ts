export interface TextInformationMessage {
  _messageType: string;
  msgType: number;
  msgId: number;
  parameters: any[];
  _isInitialized: boolean;
  text: string;
}; 
