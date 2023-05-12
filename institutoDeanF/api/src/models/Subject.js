const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Subject', {
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,

    },
    nameSubject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teachers:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    schoolDivision:{
      type: DataTypes.ENUM("A","B","C","D","E"),
       allowNull: false,
    },
    schoolCycle:{
      type: DataTypes.ENUM("basico","especializado"),
      allowNull: false,
    }

  }, {
    timestamps: false,
  });
};
