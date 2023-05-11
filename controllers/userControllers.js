const { reset } = require("nodemon");
const { User,Thought } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const user = await User.find().populate({ path: "Thoughts" });
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).populate({
        path: "Thoughts",
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
const user = await User.findOneAndDelete({ _id:req.params.userId});

if (!user){
    res.status(404).json({ message:"No user with that ID"})
}
await Thought.deleteMany({_id:{$in: user.thoughts}});
res.json({ message:"User deleted successfully deleted"})
    } catch (err) {
        res.status(500).json(err);
    }
},
async updateUser(req, res) {
try{
const user = await User.findOneAndUpdate(
{_id:req.params.userId},
{$set:req.body},
)
if (!user) {
    res.status(404).json({ message:"User not found"});
}
res.json({ message:"User updated successfully"})
}
catch (err) {
    res.status(500).json(err);
}
}
}