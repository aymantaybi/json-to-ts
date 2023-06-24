export interface ShortcutBarContentMessage {
  _messageType: string;
  characterId: number;
  barType: number;
  shortcuts: ShortcutBarContentMessage.Shortcuts[];
  _isInitialized: boolean;
}; 
export namespace ShortcutBarContentMessage {
export interface Shortcuts {
  _type: string;
  slot: number;
  spellId: number;
}; 
}; 
