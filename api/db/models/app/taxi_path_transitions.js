/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxi_path_transitions', {
    inPath: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    outPath: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    inNode: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    outNode: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    build_min: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'taxi_path_transitions'
  });
};
