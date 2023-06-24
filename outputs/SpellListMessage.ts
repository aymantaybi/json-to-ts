export interface SpellListMessage {
  _messageType: string;
  spellPrevisualization: boolean;
  spells: SpellListMessage.Spells[];
  _isInitialized: boolean;
}; 
export namespace SpellListMessage {
export interface Spells {
  _type: string;
  position: number;
  spellId: number;
  spellLevel: number;
  isDisabled: boolean;
}; 
}; 
