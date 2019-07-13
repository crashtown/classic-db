/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creature_questrelation', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    quest: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    patch_min: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    patch_max: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '10'
    }
  }, {
    tableName: 'creature_questrelation'
  });
};
