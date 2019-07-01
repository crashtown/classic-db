/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item_display_info', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'item_display_info'
  });
};
