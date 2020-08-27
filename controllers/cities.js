const City = require('../models/city')

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
}

function index(req, res) {
    City.find({}, (err, cities) =>{
        res.status(200).json(cities)
    })
}

function show(req, res) {
    City.findById(req.params.id)
        .then((city)=> {
            res.status(200).json(city)
        })
}

function create(req, res) {
    City.create(req.body)
        .then((city) => {
            res.status(200).json(city)
        })
}

function deleteOne(req, res) {
    City.findByIdAndDelete(req.params.id)
        .then((city) => {
            res.status(200).json(city)
        })
}

function update(req, res) {
    City.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((city) => {
            res.status(200).json(city)
        })
}