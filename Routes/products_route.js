const express = require('express')
const route = express.Router()
const app = express()
const product = require('../model/products')

route.get('/',(req,res)=>{
    res.render('products.ejs')
})

route.post('/addProduct',(req,res)=>{
    req.body.date = new Date();
                product.create(req.body,(err,result)=>{
                    if(err){
                        console.log(err)
                    
                    }
                    else{
                        res.redirect('/products')
                    }
                })
})

route.get('/',(req,res)=>{
    product.find((err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.render('products.ejs', {productsData : result, form1:'add Products', form2:'view Products', form3:'update products', form4:'delete products'})
        }
    })
})


route.post('/updateProducts',(req,res)=>{
    product.updateOne({productName:req.body.productName},{$set:{productPrice:req.body.productPrice}},(err,result)=>{
       if(err){
        console.log(err)
       }
       else{
        res.redirect('/products')
       }
    })
})

route.post('/delete',(req,res)=>{
    product.findOneAndDelete({_id:req.body.id},(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send('deleted the product sucessfully')
        }
    })
})


module.exports=route
