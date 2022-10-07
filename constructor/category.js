const Category = require('../model/category')

module.exports.getCategory = async function (req, res) {
    const categories = await Category.find()
    res.status(200).send(categories)
}

module.exports.setCategory = async function (req, res) {
    const categories = req.body
    await Category.save(categories)

    res.status(201).send('Successfull')
}

module.exports.categoryDeleteById = async function (req, res) {
    const id = req.params.id
    
    const categoryProducts = await Category.deleteById(id)

    res.status(200).send(categoryProducts)
}

module.exports.categoryUpdateById = async function (req, res) {
    const id = req.params.id
    const namee = req.body.name

    const categoryProducts = await Category.updateById(id,namee)

    res.status(200).send(categoryProducts)
}

module.exports.categoryUpdateById = async function (req, res) {
    const id = req.params.id
    const namee = req.body.name

    const categoryProducts = await Category.updateById(id,namee)

    res.status(200).send(categoryProducts)
}