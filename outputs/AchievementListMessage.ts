export interface AchievementListMessage {
  _messageType: string;
  finishedAchievementsIds: number[];
  rewardableAchievements: any[];
  accountAchievements: AchievementListMessage.AccountAchievements[];
  accountAchievementsRewardable: any[];
  _isInitialized: boolean;
  enrichData: AchievementListMessage.EnrichData;
}; 
export namespace AchievementListMessage {
export interface AccountAchievements {
  _type: string;
  id: number;
  isFirstForAccount: boolean;
}; 
export interface EnrichData {
  points: number;
  achievementsTotal: number;
}; 
}; 
