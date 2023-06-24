export interface CharacterStatsListMessage {
  _messageType: string;
  stats: CharacterStatsListMessage.Stats;
  _isInitialized: boolean;
}; 
export namespace CharacterStatsListMessage {
export interface Stats {
  _type: string;
  experience: number;
  experienceLevelFloor: number;
  experienceNextLevelFloor: number;
  kamas: number;
  remoteBankTaxKamas: number;
  statsPoints: number;
  additionnalPoints: number;
  spellsPoints: number;
  alignmentInfos: Stats.AlignmentInfos;
  lifePoints: number;
  maxLifePoints: number;
  energyPoints: number;
  maxEnergyPoints: number;
  actionPointsCurrent: number;
  movementPointsCurrent: number;
  initiative: Stats.Initiative;
  prospecting: Stats.Prospecting;
  actionPoints: Stats.ActionPoints;
  movementPoints: Stats.MovementPoints;
  strength: Stats.Strength;
  vitality: Stats.Vitality;
  wisdom: Stats.Wisdom;
  chance: Stats.Chance;
  agility: Stats.Agility;
  intelligence: Stats.Intelligence;
  range: Stats.Range;
  summonableCreaturesBoost: Stats.SummonableCreaturesBoost;
  summonableMaximumBombs: Stats.SummonableMaximumBombs;
  reflect: Stats.Reflect;
  criticalHit: Stats.CriticalHit;
  criticalHitWeapon: number;
  criticalMiss: Stats.CriticalMiss;
  healBonus: Stats.HealBonus;
  allDamagesBonus: Stats.AllDamagesBonus;
  weaponDamagesBonusPercent: Stats.WeaponDamagesBonusPercent;
  damagesBonusPercent: Stats.DamagesBonusPercent;
  trapBonus: Stats.TrapBonus;
  trapBonusPercent: Stats.TrapBonusPercent;
  permanentDamagePercent: Stats.PermanentDamagePercent;
  tackleBlock: Stats.TackleBlock;
  tackleEvade: Stats.TackleEvade;
  PAAttack: Stats.PAAttack;
  PMAttack: Stats.PMAttack;
  pushDamageBonus: Stats.PushDamageBonus;
  criticalDamageBonus: Stats.CriticalDamageBonus;
  neutralDamageBonus: Stats.NeutralDamageBonus;
  earthDamageBonus: Stats.EarthDamageBonus;
  waterDamageBonus: Stats.WaterDamageBonus;
  airDamageBonus: Stats.AirDamageBonus;
  fireDamageBonus: Stats.FireDamageBonus;
  dodgePALostProbability: Stats.DodgePALostProbability;
  dodgePMLostProbability: Stats.DodgePMLostProbability;
  neutralElementResistPercent: Stats.NeutralElementResistPercent;
  earthElementResistPercent: Stats.EarthElementResistPercent;
  waterElementResistPercent: Stats.WaterElementResistPercent;
  airElementResistPercent: Stats.AirElementResistPercent;
  fireElementResistPercent: Stats.FireElementResistPercent;
  neutralElementReduction: Stats.NeutralElementReduction;
  earthElementReduction: Stats.EarthElementReduction;
  waterElementReduction: Stats.WaterElementReduction;
  airElementReduction: Stats.AirElementReduction;
  fireElementReduction: Stats.FireElementReduction;
  pushDamageReduction: Stats.PushDamageReduction;
  criticalDamageReduction: Stats.CriticalDamageReduction;
  pvpNeutralElementResistPercent: Stats.PvpNeutralElementResistPercent;
  pvpEarthElementResistPercent: Stats.PvpEarthElementResistPercent;
  pvpWaterElementResistPercent: Stats.PvpWaterElementResistPercent;
  pvpAirElementResistPercent: Stats.PvpAirElementResistPercent;
  pvpFireElementResistPercent: Stats.PvpFireElementResistPercent;
  pvpNeutralElementReduction: Stats.PvpNeutralElementReduction;
  pvpEarthElementReduction: Stats.PvpEarthElementReduction;
  pvpWaterElementReduction: Stats.PvpWaterElementReduction;
  pvpAirElementReduction: Stats.PvpAirElementReduction;
  pvpFireElementReduction: Stats.PvpFireElementReduction;
  dealtDamageMultiplierMelee: Stats.DealtDamageMultiplierMelee;
  receivedDamageMultiplierMelee: Stats.ReceivedDamageMultiplierMelee;
  dealtDamageMultiplierDistance: Stats.DealtDamageMultiplierDistance;
  receivedDamageMultiplierDistance: Stats.ReceivedDamageMultiplierDistance;
  dealtDamageMultiplierWeapon: Stats.DealtDamageMultiplierWeapon;
  receivedDamageMultiplierWeapon: Stats.ReceivedDamageMultiplierWeapon;
  dealtDamageMultiplierSpells: Stats.DealtDamageMultiplierSpells;
  receivedDamageMultiplierSpells: Stats.ReceivedDamageMultiplierSpells;
  spellModifications: any[];
  probationTime: number;
}; 
export namespace Stats {
export interface AlignmentInfos {
  _type: string;
  alignmentSide: number;
  alignmentValue: number;
  alignmentGrade: number;
  characterPower: number;
  honor: number;
  honorGradeFloor: number;
  honorNextGradeFloor: number;
  aggressable: number;
}; 
export interface Initiative {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface Prospecting {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface ActionPoints {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface MovementPoints {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface Strength {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface Vitality {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface Wisdom {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface Chance {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface Agility {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface Intelligence {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface Range {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface SummonableCreaturesBoost {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface SummonableMaximumBombs {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface Reflect {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface CriticalHit {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface CriticalMiss {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface HealBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface AllDamagesBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface WeaponDamagesBonusPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface DamagesBonusPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface TrapBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface TrapBonusPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PermanentDamagePercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface TackleBlock {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface TackleEvade {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PAAttack {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PMAttack {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PushDamageBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface CriticalDamageBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface NeutralDamageBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface EarthDamageBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface WaterDamageBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface AirDamageBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface FireDamageBonus {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface DodgePALostProbability {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface DodgePMLostProbability {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface NeutralElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface EarthElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface WaterElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface AirElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface FireElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface NeutralElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface EarthElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface WaterElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface AirElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface FireElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PushDamageReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface CriticalDamageReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpNeutralElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpEarthElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpWaterElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpAirElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpFireElementResistPercent {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpNeutralElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpEarthElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpWaterElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpAirElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface PvpFireElementReduction {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface DealtDamageMultiplierMelee {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface ReceivedDamageMultiplierMelee {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface DealtDamageMultiplierDistance {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface ReceivedDamageMultiplierDistance {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface DealtDamageMultiplierWeapon {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface ReceivedDamageMultiplierWeapon {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface DealtDamageMultiplierSpells {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
export interface ReceivedDamageMultiplierSpells {
  _type: string;
  base: number;
  additionnal: number;
  objectsAndMountBonus: number;
  alignGiftBonus: number;
  contextModif: number;
}; 
}; 
}; 
