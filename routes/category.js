const { Router } = require('express')
const router = Router()
const constructor = require('../constructor/category')

router.get('/', constructor.getCategory)

router.post('/add', constructor.setCategory)

router.get('/:id', constructor.categoryFindById)

router.delete('/:id',constructor.categoryDeleteById)

router.put('/:id',constructor.categoryUpdateById)

module.exports = router