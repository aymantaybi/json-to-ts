export interface SetCharacterRestrictionsMessage {
  _messageType: string;
  restrictions: SetCharacterRestrictionsMessage.Restrictions;
  _isInitialized: boolean;
}; 
export namespace SetCharacterRestrictionsMessage {
export interface Restrictions {
  _type: string;
  cantBeAggressed: boolean;
  cantBeChallenged: boolean;
  cantTrade: boolean;
  cantBeAttackedByMutant: boolean;
  cantRun: boolean;
  forceSlowWalk: boolean;
  cantMinimize: boolean;
  cantMove: boolean;
  cantAggress: boolean;
  cantChallenge: boolean;
  cantExchange: boolean;
  cantAttack: boolean;
  cantChat: boolean;
  cantUseObject: boolean;
  cantUseTaxCollector: boolean;
  cantUseInteractive: boolean;
  cantSpeakToNPC: boolean;
  cantChangeZone: boolean;
  cantAttackMonster: boolean;
  cantWalk8Directions: boolean;
}; 
}; 
