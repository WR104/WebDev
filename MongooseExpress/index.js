const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const path = require('path')

const Product = require('./models/products')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection success")
    })
    .catch(err => {
        console.log("Connection failed")
        console.log(err)
    })
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', {products})
})

app.get('/products/:id', async (req,res)=>{
    const {id} = req.params;
    const products = await Product.findById(id)
    console.log(product)
    res.send('details page')
})

app.listen(3000, () => {
    console.log("App is listening on port 3000")
})