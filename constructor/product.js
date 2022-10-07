const Product = require('../model/product')

module.exports.getProducts = async function (req, res) {
    const products = await Product.find()
    res.status(200).send(products)
}

module.exports.setProducts = async function (req, res) {
    const products = req.body
    await Product.save(products)

    res.status(201).send('Successfull')
}

module.exports.deleteProduct = async function (req, res) {
    const id = req.param.id

    await Product.deleteById(id)

    res.status(201).send('Successfull')
}

module.exports.updateProduct = async function (req, res) {
    const id = req.param.id
    const namee = req.body.name
    const pricee = req.body.price

    await Product.updateById(id,namee,pricee)

    res.status(201).send('Successfull')
}