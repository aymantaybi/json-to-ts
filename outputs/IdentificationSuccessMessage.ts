export interface IdentificationSuccessMessage {
  _messageType: string;
  login: string;
  nickname: string;
  accountId: number;
  communityId: number;
  hasRights: boolean;
  secretQuestion: string;
  subscriptionEndDate: number;
  wasAlreadyConnected: boolean;
  accountCreation: number;
  hasConsoleRight: boolean;
  _isInitialized: boolean;
  _groupFlags: string;
  _applicationName: string;
}; 
