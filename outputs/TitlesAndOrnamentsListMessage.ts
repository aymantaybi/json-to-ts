export interface TitlesAndOrnamentsListMessage {
  _messageType: string;
  titles: any[];
  ornaments: any[];
  activeTitle: number;
  activeOrnament: number;
  _isInitialized: boolean;
}; 
