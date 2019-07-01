/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_bonus_data', {
    entry: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    direct_bonus: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    dot_bonus: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    ap_bonus: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    ap_dot_bonus: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    build_min: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    build_max: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '5875'
    }
  }, {
    tableName: 'spell_bonus_data'
  });
};
