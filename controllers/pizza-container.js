const {Pizza} = require('../models');

const pizzaController = {
    //the functions will go in here as methods
    //get all pizzas
    getAllPizzas(req,res){
        Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err);
        });
    },

    //get one pizza by id
    getPizzaById({params},res){
        Pizza.findOne({ _id: params.id})
        .then(dbPizzaData => {
            //if no pizza found throw err
            if(!dbPizzaData){
                res.status(404).json({message: 'No pizza found with this id!'});
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    },
};

module.exports = pizzaController;