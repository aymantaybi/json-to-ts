export interface AccountCapabilitiesMessage {
  _messageType: string;
  accountId: number;
  tutorialAvailable: boolean;
  breedsVisible: number;
  breedsAvailable: number;
  status: number;
  accountRights: any[];
  _isInitialized: boolean;
  _accountRightsMap: AccountCapabilitiesMessage._accountRightsMap;
}; 
export namespace AccountCapabilitiesMessage {
export interface _accountRightsMap {
}; 
}; 
