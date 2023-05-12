const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('EscolarCycle', {
    idEscolarCycle:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,

    },
    division: {
        type: DataTypes.ENUM("A","B","C","D","E"),
        allowNull: false,
    },
    course:{
        type: DataTypes.ENUM("1","2","3","4","5","6"),
        allowNull: false,
    }
  }, {
    timestamps: false,
  });
};
