export interface GameFightUpdateTeamMessage {
  _messageType: string;
  fightId: number;
  team: GameFightUpdateTeamMessage.Team;
  _isInitialized: boolean;
}; 
export namespace GameFightUpdateTeamMessage {
export interface Team {
  _type: string;
  teamId: number;
  leaderId: number;
  teamSide: number;
  teamTypeId: number;
  teamMembers: Team.TeamMembers[];
}; 
export namespace Team {
export interface TeamMembers {
  _type: string;
  id: number;
  monsterId: number;
  grade: number;
}; 
}; 
}; 
