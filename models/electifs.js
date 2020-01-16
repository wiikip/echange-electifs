'use strict';
module.exports = (sequelize, DataTypes) => {
  const Electifs = sequelize.define('Electifs', {
    name: DataTypes.STRING,
    idSlots: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {});
  Electifs.associate = function(models) {
    // associations can be defined here
  };
  return Electifs;
};
