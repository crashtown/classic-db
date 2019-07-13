/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('disenchant_loot_template', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    item: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    ChanceOrQuestChance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '100'
    },
    groupid: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    mincountOrRef: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '1'
    },
    maxcount: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    condition_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'disenchant_loot_template'
  });
};
