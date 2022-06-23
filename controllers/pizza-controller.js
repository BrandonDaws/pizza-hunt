const {Pizza} = require('../models');

const pizzaController = {
    //the functions will go in here as methods
    //get all pizzas
    getAllPizza(req,res){
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

    //create Pizza
    createPizza({ body }, res) {
        Pizza.create(body)
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.status(400).json(err));
    },

    //update pizza by id
    updatePizza({ params, body }, res ){
        Pizza.findOneAndUpdate({ _id: params.id }, body, {new: true })
        .then(dbPizzaData => {
            if(!dbPizzaData){
                res.status(404).json({message: "No Pizza found by that ID!"});
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    },

    //delete a pizza
    deletePizza({params}, res ){
        Pizza.findOneAndDelete({_id: params.id})
        .then(dbPizzaData => {
            if(!dbPizzaData){
                res.status(404).json({message: "No Pizza by that Id!"});
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = pizzaController;