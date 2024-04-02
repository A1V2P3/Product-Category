const db = require('../models');

//create main Model

const Product = db.productmaster
const Category=db.categorytables

//main work

//1.create product

const addProduct =async(req,res)=>{
    let info = {
        ProductId:req.body.ProductId,
        ProductName:req.body.ProductName,
    }

    const product= await Product.create(info)
    res.status(200).send(product)

    console.log(product);
}

//2.get all product

const getAllProducts=async (req,res)=>{
    let products=await Product.findAll({})
    res.status(200).send(products)
}

//3.get single product

const getOneProduct=async (req,res)=>{

    let id=req.params.id
    let product=await Product.findOne({ where :{id: id}})
    res.status(200).send(product)
}


//4.update product


const updateProduct=async (req,res)=>{

    let id=req.params.id
    
    const product = await Product.update(req.body,{where:{id: id}})

    res.status(200).send(product)
}


//5.delete product by id
const deleteProduct=async (req,res)=>{

    let id=req.params.id
    
  await Product.destroy({where:{id: id}})

    res.status(200).send('Product is deleted !')
}

// 6. connect one to many product and category

const getPrCat=async(req,res)=>{
    const data =await Product.findAll({
        include: [{
            model:Category,
            as:'category',
            
        }],
        where:{ id: 2}
    })

    res.status(200).send(data)
}





module.exports ={
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPrCat
}