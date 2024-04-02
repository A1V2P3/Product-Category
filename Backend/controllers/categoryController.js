const db = require('../models');

//create main Model


const Category=db.categorytables

//main work

//1.create product

const addCategory =async(req,res)=>{
    let data = {
        CategoryId:req.body.CategoryId,
        CategoryName:req.body.CategoryName,
    }

    const category= await Category.create(data)
    res.status(200).send(category)

}

//2.get all Category

const getAllCategory= async(req,res)=>{
    let categiries=await Category.findAll({})
    res.status(200).send(categiries)
    console.log(categiries);
}

//3.get single product

const getOneCategory=async (req,res)=>{

    let id=req.params.id
    let category=await Category.findOne({ where :{id: id}})
    res.status(200).send(category)
}


//4.update product


const updateCategory=async (req,res)=>{

    let id=req.params.id
    
    const category = await Category.update(req.body,{where:{id: id}})

    res.status(200).send(category)
}


//5.delete product by id
const deleteCategory=async (req,res)=>{

    let id=req.params.id
    
  await Category.destroy({where:{id:id}})

    res.status(200).send('Category is deleted !')
}





module.exports ={
    addCategory,
    getAllCategory,
    getOneCategory,
     updateCategory,
    deleteCategory
}