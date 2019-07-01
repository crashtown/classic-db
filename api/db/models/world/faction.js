/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faction', {
    ID: {
      type: DataTypes.INTEGER(3).UNSIGNED,
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
    reputationListID: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    baseRepRaceMask1: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    baseRepRaceMask2: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    baseRepRaceMask3: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    baseRepRaceMask4: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    baseRepClassMask1: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    baseRepClassMask2: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    baseRepClassMask3: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    baseRepClassMask4: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    baseRepValue1: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    baseRepValue2: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    baseRepValue3: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    baseRepValue4: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    reputationFlags1: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reputationFlags2: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reputationFlags3: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    reputationFlags4: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    team: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    name1: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    name2: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    name3: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    name4: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    name5: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    name6: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    name7: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    name8: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    description1: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    description2: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    description3: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    description4: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    description5: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    description6: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    description7: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    description8: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'faction'
  });
};
