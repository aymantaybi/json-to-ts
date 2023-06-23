function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function compileType(name, definitions) {
  return `export interface ${name} {\n${definitions}}; \n`;
}

function generateTypeDefinitions(typeName, json) {
  let typeDefinitions = "";
  let nestedTypes = [];

  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const value = json[key];
      if (typeof value === "string") {
        typeDefinitions += `  ${key}: string;\n`;
      } else if (typeof value === "number") {
        typeDefinitions += `  ${key}: number;\n`;
      } else if (typeof value === "boolean") {
        typeDefinitions += `  ${key}: boolean;\n`;
      } else if (Array.isArray(value)) {
        const arrayType = value.length > 0 ? typeof value[0] : "any";
        if (arrayType === "object") {
          const nestedTypeName = capitalize(key);
          const nestedTypeDefinitions = generateTypeDefinitions(nestedTypeName, value[0]);
          nestedTypes.push(nestedTypeDefinitions);
          typeDefinitions += `  ${key}: ${typeName}.${nestedTypeName}[];\n`;
        } else {
          typeDefinitions += `  ${key}: ${arrayType}[];\n`;
        }
      } else if (typeof value === "object" && value !== null) {
        const nestedTypeName = capitalize(key);
        const nestedTypeDefinitions = generateTypeDefinitions(nestedTypeName, value);
        nestedTypes.push(nestedTypeDefinitions);
        typeDefinitions += `  ${key}: ${typeName}.${nestedTypeName};\n`;
      }
    }
  }

  const compiledType = compileType(typeName, typeDefinitions);

  let namespaceBody = "";

  for (type of nestedTypes) {
    namespaceBody += type;
  }

  const typeNamespace = nestedTypes.length ? `export namespace ${typeName} {\n${namespaceBody}}; \n` : "";

  return compiledType + typeNamespace;
}

const json = {
  _messageType: "MapComplementaryInformationsDataMessage",
  subAreaId: 479,
  mapId: 68551685,
  houses: [],
  actors: [
    {
      _type: "GameRolePlayCharacterInformations",
      contextualId: 9571232,
      look: {
        _type: "EntityLook",
        bonesId: 1,
        skins: [101, 2171, 3694, 3693, 3692, 3695],
        indexedColors: [17126515, 36304686, 51236903, 81975404, 89956021],
        scales: [145],
        subentities: [],
        speed: 5,
      },
      disposition: { _type: "EntityDispositionInformations", cellId: 444, direction: 1 },
      name: "El-Tuiryu",
      humanoidInfo: {
        _type: "HumanInformations",
        restrictions: {
          _type: "ActorRestrictionsInformations",
          cantBeAggressed: false,
          cantBeChallenged: false,
          cantTrade: false,
          cantBeAttackedByMutant: false,
          cantRun: false,
          forceSlowWalk: false,
          cantMinimize: false,
          cantMove: false,
          cantAggress: false,
          cantChallenge: false,
          cantExchange: false,
          cantAttack: true,
          cantChat: false,
          cantUseObject: false,
          cantUseTaxCollector: false,
          cantUseInteractive: false,
          cantSpeakToNPC: false,
          cantChangeZone: false,
          cantAttackMonster: false,
          cantWalk8Directions: false,
        },
        sex: true,
        options: [],
      },
      accountId: 172882524,
      alignmentInfos: { _type: "ActorAlignmentInformations", alignmentSide: 0, alignmentValue: 0, alignmentGrade: 0, characterPower: 9571260 },
    },
    {
      _type: "GameRolePlayGroupMonsterInformations",
      contextualId: -2,
      look: { _type: "EntityLook", bonesId: 285, skins: [], indexedColors: [], scales: [145], subentities: [], speed: 5 },
      disposition: { _type: "EntityDispositionInformations", cellId: 443, direction: 3 },
      staticInfos: {
        _type: "GroupMonsterStaticInformations",
        mainCreatureLightInfos: {
          _type: "MonsterInGroupLightInformations",
          creatureGenericId: 63,
          grade: 2,
          level: 13,
          xp: 1638,
          staticInfos: { nameId: "Crabe", level: 13, isMiniBoss: false, isBoss: false, xp: 1638 },
        },
        underlings: [
          {
            _type: "MonsterInGroupInformations",
            creatureGenericId: 63,
            grade: 3,
            level: 14,
            xp: 1792,
            look: { _type: "EntityLook", bonesId: 285, skins: [], indexedColors: [], scales: [145], subentities: [], speed: 5 },
            staticInfos: { nameId: "Crabe", level: 14, isMiniBoss: false, isBoss: false, xp: 1792 },
          },
        ],
      },
      ageBonus: 46,
      lootShare: -1,
      alignmentSide: -1,
      keyRingBonus: false,
      hasHardcoreDrop: false,
      scaleLevel: 0,
    },
    {
      _type: "GameRolePlayGroupMonsterInformations",
      contextualId: -1,
      look: { _type: "EntityLook", bonesId: 285, skins: [], indexedColors: [], scales: [145], subentities: [], speed: 5 },
      disposition: { _type: "EntityDispositionInformations", cellId: 292, direction: 5 },
      staticInfos: {
        _type: "GroupMonsterStaticInformations",
        mainCreatureLightInfos: {
          _type: "MonsterInGroupLightInformations",
          creatureGenericId: 63,
          grade: 5,
          level: 16,
          xp: 2112,
          staticInfos: { nameId: "Crabe", level: 16, isMiniBoss: false, isBoss: false, xp: 2112 },
        },
        underlings: [],
      },
      ageBonus: 31,
      lootShare: -1,
      alignmentSide: -1,
      keyRingBonus: false,
      hasHardcoreDrop: false,
      scaleLevel: 0,
    },
    {
      _type: "GameRolePlayGroupMonsterInformations",
      contextualId: -3,
      look: { _type: "EntityLook", bonesId: 285, skins: [], indexedColors: [], scales: [145], subentities: [], speed: 5 },
      disposition: { _type: "EntityDispositionInformations", cellId: 31, direction: 7 },
      staticInfos: {
        _type: "GroupMonsterStaticInformations",
        mainCreatureLightInfos: {
          _type: "MonsterInGroupLightInformations",
          creatureGenericId: 63,
          grade: 1,
          level: 12,
          xp: 1488,
          staticInfos: { nameId: "Crabe", level: 12, isMiniBoss: false, isBoss: false, xp: 1488 },
        },
        underlings: [
          {
            _type: "MonsterInGroupInformations",
            creatureGenericId: 63,
            grade: 2,
            level: 13,
            xp: 1638,
            look: { _type: "EntityLook", bonesId: 285, skins: [], indexedColors: [], scales: [145], subentities: [], speed: 5 },
            staticInfos: { nameId: "Crabe", level: 13, isMiniBoss: false, isBoss: false, xp: 1638 },
          },
          {
            _type: "MonsterInGroupInformations",
            creatureGenericId: 63,
            grade: 3,
            level: 14,
            xp: 1792,
            look: { _type: "EntityLook", bonesId: 285, skins: [], indexedColors: [], scales: [145], subentities: [], speed: 5 },
            staticInfos: { nameId: "Crabe", level: 14, isMiniBoss: false, isBoss: false, xp: 1792 },
          },
          {
            _type: "MonsterInGroupInformations",
            creatureGenericId: 63,
            grade: 5,
            level: 16,
            xp: 2112,
            look: { _type: "EntityLook", bonesId: 285, skins: [], indexedColors: [], scales: [145], subentities: [], speed: 5 },
            staticInfos: { nameId: "Crabe", level: 16, isMiniBoss: false, isBoss: false, xp: 2112 },
          },
        ],
      },
      ageBonus: 25,
      lootShare: -1,
      alignmentSide: -1,
      keyRingBonus: false,
      hasHardcoreDrop: false,
      scaleLevel: 0,
    },
  ],
  interactiveElements: [
    {
      _type: "InteractiveElementWithAgeBonus",
      elementId: 459626,
      elementTypeId: 75,
      enabledSkills: [],
      disabledSkills: [
        {
          _type: "InteractiveElementSkill",
          skillId: 124,
          skillInstanceUid: 135836890,
          _cursor: 6,
          _name: "Pêcher",
          _parentJobId: 36,
          _levelMin: 1,
          _parentJobName: "Pêcheur",
        },
      ],
      ageBonus: 3,
      _name: "Petits poissons (rivière)",
    },
  ],
  statedElements: [{ _type: "StatedElement", elementId: 459626, elementCellId: 546, elementState: 0 }],
  obstacles: [],
  fights: [],
  tacticalModeId: 1,
  _isInitialized: true,
};

const typeDefinitions = generateTypeDefinitions("MapComplementaryInformationsDataMessage", json);

console.log(typeDefinitions);
