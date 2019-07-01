/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_template', {
    ID: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    build: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '5875',
      primaryKey: true
    },
    school: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    category: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    castUI: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    dispel: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    mechanic: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    attributes: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    attributesEx: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    attributesEx2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    attributesEx3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    attributesEx4: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    stances: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    stancesNot: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    targets: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    targetCreatureType: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    requiresSpellFocus: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    casterAuraState: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    targetAuraState: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    castingTimeIndex: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    recoveryTime: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    categoryRecoveryTime: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    interruptFlags: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    auraInterruptFlags: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    channelInterruptFlags: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    procFlags: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    procChance: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    procCharges: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    maxLevel: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    baseLevel: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    spellLevel: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    durationIndex: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    powerType: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    manaCost: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    manCostPerLevel: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    manaPerSecond: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    manaPerSecondPerLevel: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    rangeIndex: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    speed: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    modelNextSpell: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    stackAmount: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    totem1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    totem2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reagent1: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    reagent2: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    reagent3: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    reagent4: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    reagent5: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    reagent6: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    reagent7: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    reagent8: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    reagentCount1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reagentCount2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reagentCount3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reagentCount4: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reagentCount5: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reagentCount6: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reagentCount7: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reagentCount8: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    equippedItemClass: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    equippedItemSubClassMask: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    equippedItemInventoryTypeMask: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effect1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effect2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effect3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectDieSides1: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effectDieSides2: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effectDieSides3: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effectBaseDice1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectBaseDice2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectBaseDice3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectDicePerLevel1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectDicePerLevel2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectDicePerLevel3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectRealPointsPerLevel1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectRealPointsPerLevel2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectRealPointsPerLevel3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectBasePoints1: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effectBasePoints2: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effectBasePoints3: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effectMechanic1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectMechanic2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectMechanic3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectImplicitTargetA1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectImplicitTargetA2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectImplicitTargetA3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectImplicitTargetB1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectImplicitTargetB2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectImplicitTargetB3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectRadiusIndex1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectRadiusIndex2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectRadiusIndex3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectApplyAuraName1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectApplyAuraName2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectApplyAuraName3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectAmplitude1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectAmplitude2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectAmplitude3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectMultipleValue1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectMultipleValue2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectMultipleValue3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectChainTarget1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectChainTarget2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectChainTarget3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectItemType1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectItemType2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectItemType3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectMiscValue1: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effectMiscValue2: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effectMiscValue3: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    effectTriggerSpell1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectTriggerSpell2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectTriggerSpell3: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    effectPointsPerComboPoint1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectPointsPerComboPoint2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    effectPointsPerComboPoint3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    spellVisual1: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    spellVisual2: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    spellIconId: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    activeIconId: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    spellPriority: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    name1: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    name2: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    name3: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    name4: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    name5: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    name6: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    name7: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    name8: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    nameFlags: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    nameSubtext1: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    nameSubtext2: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    nameSubtext3: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    nameSubtext4: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    nameSubtext5: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    nameSubtext6: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    nameSubtext7: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    nameSubtext8: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    nameSubtextFlags: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    description1: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    description2: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    description3: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    description4: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    description5: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    description6: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    description7: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    description8: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    descriptionFlags: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    auraDescription1: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    auraDescription2: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    auraDescription3: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    auraDescription4: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    auraDescription5: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    auraDescription6: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    auraDescription7: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    auraDescription8: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    auraDescriptionFlags: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    manaCostPercentage: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    startRecoveryCategory: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    startRecoveryTime: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    minTargetLevel: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    maxTargetLevel: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    spellFamilyName: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    spellFamilyFlags: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    maxAffectedTargets: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    dmgClass: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    preventionType: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    stanceBarOrder: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    dmgMultiplier1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    dmgMultiplier2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    dmgMultiplier3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    minFactionId: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    minReputation: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    requiredAuraVision: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    customFlags: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'spell_template'
  });
};
