

module.exports = (sequelize,DataTypes)=>{

    const Product = sequelize.define("product" ,{
        ProductId:{
           type: DataTypes.INTEGER
        },
        ProductName: {
            type:DataTypes.STRING,
            allowNull:false 
        }
       
    })

    return Product
}