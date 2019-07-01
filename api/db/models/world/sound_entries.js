/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sound_entries', {
    ID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'sound_entries'
  });
};
