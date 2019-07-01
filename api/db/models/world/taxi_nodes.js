/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxi_nodes', {
    ID: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    build: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    mapId: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    z: {
      type: DataTypes.FLOAT,
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
    mountCreatureId1: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    mountCreatureId2: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'taxi_nodes'
  });
};
