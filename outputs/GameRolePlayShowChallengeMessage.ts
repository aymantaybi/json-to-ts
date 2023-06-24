export interface GameRolePlayShowChallengeMessage {
  _messageType: string;
  commonsInfos: GameRolePlayShowChallengeMessage.CommonsInfos;
  _isInitialized: boolean;
}; 
export namespace GameRolePlayShowChallengeMessage {
export interface CommonsInfos {
  _type: string;
  fightId: number;
  fightType: number;
  fightTeams: CommonsInfos.FightTeams[];
  fightTeamsPositions: number[];
  fightTeamsOptions: CommonsInfos.FightTeamsOptions[];
}; 
export namespace CommonsInfos {
export interface FightTeams {
  _type: string;
  teamId: number;
  leaderId: number;
  teamSide: number;
  teamTypeId: number;
  teamMembers: FightTeams.TeamMembers[];
}; 
export namespace FightTeams {
export interface TeamMembers {
  _type: string;
  id: number;
  name: string;
  level: number;
}; 
}; 
export interface FightTeamsOptions {
  _type: string;
  isSecret: boolean;
  isRestrictedToPartyOnly: boolean;
  isClosed: boolean;
  isAskingForHelp: boolean;
}; 
}; 
}; 
