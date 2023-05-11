const { User, Thought } = require('../models');
module.exports = {
async getThoughts(req, res) {
    try {
const thought = await Thought.find()
res.json(thought)
    } catch (err) {
        res.status(404).json(err);
    }
},
async getSingleThought(req, res) {
    try{
        const thought = await Thought.findOne({_id: req.params.thoughtId});


    } catch (err) {res.status(404).json(err);}
}



}
