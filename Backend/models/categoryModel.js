module.exports = (sequelize,DataTypes)=>{
    const Category = sequelize.define("category" ,{
        CategoryId : {
            type:DataTypes.INTEGER
        },
        CategoryName: {
            type:DataTypes.STRING,
            allowNull:false
        }
       
    })

    return Category
}