const {User} = require("../models");

module.exports = {
    async getUsers(req, res) {
try {
    const user = await User.find().populate({ path: "Thoughts"});
    res.json(user);

} catch (err) {
    res.status(500).json(err);
}




    }
}