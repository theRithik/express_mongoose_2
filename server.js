const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const productRoutes = require('./Routes/products_route')
const db = require('./db/confid')

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.set('view engine','ejs')

//app.set('foldername', 'path.join(__dirname))

app.use('/products',productRoutes)

app.get('/',(req,res)=>{
    res.render('products.ejs')
})

app.listen(3000,()=>{
    console.log('in port 3000')
})