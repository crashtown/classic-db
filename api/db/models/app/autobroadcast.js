/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autobroadcast', {
    delay: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    stringId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'autobroadcast'
  });
};
