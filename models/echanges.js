'use strict';
module.exports = (sequelize, DataTypes) => {
  const Echanges = sequelize.define('Echanges', {
    idSourceElectif: DataTypes.INTEGER,
    idWantedElectif: DataTypes.ARRAY(DataTypes.INTEGER),
    idSlot: DataTypes.INTEGER,
    idAuth: DataTypes.STRING,
    message: DataTypes.STRING
  }, {});
  Echanges.associate = function(models) {
    // associations can be defined here
  };
  return Echanges;
};
