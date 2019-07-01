/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('areatrigger_template', {
    ID: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    build: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    map_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
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
    radius: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    box_x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    box_y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    box_z: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    box_orientation: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'areatrigger_template'
  });
};
