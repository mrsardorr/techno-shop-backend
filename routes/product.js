const { Router } = require('express')
const router = Router()
const constructor = require('../constructor/product')

router.get('/', constructor.getProducts)

router.post('/add', constructor.setProducts)

router.delete('/:id', constructor.deleteProduct)

router.put('/:id', constructor.updateProduct)


module.exports = router