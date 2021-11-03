const Clothes=(sequelize, DataTypes)=> sequelize.define("clothes",{
brandName:{
    type:DataTypes.STRING,
    allowNull:false
},
size:{
    type:DataTypes.STRING
}
})

module.exports =Clothes