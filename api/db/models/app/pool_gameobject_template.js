/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pool_gameobject_template', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    pool_entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    chance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    flags: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'pool_gameobject_template'
  });
};
