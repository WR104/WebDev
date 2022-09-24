const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection success")
    })
    .catch(err => {
        console.log("Connection failed")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true,
        min:[0,'Price must be positive']
    },
    categories: [String]
})

const Product = mongoose.model('Product', productSchema)

const bike  = new Product({name:'Mountain Bike',price:599})
bike.save()
    .then(data=>{
        console.log("Save success")
    })
    .catch(err=>{
        console.log("Failed")
        console.log(err)
    })

productSchema.methods.greet = function() {
    console.log("Hello! Hi! Howdy!")
    console.log(`- from ${this.name}`)
}
const findProduct = async () => {
    const foundProduct = await Product.findOne({name: "Mountain Bie"})
    foundProduct.greet();
}