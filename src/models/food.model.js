const Food=(sequelize, DataTypes)=> sequelize.define("food",{
    foodName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    foodCategory:{
        type:DataTypes.STRING
    }
    })

module.exports=Food