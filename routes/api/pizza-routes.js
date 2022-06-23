const router = require('express').Router();
const{
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

//set up GET all and POST at /api/pizza
// /api/pizzas
router
.route('/')
.get(getAllPizza)
.post(createPizza);


//st up GET one, PUT, and DELTE at /api/pizzas/:id

router
// /api/pizzas/:id
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router;