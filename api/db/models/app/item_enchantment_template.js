/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_enchantment_template', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    ench: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    chance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    patch_min: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    patch_max: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '10',
      primaryKey: true
    }
  }, {
    tableName: 'item_enchantment_template'
  });
};
