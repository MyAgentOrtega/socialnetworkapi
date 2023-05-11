const router = require('express').Router();
const {getUsers,
getSingleUser,
createUser,
deleteUser,
updateUser,
} = require('../../controllers/userControllers');


router.route('/').get(getUsers).post(createUser).get(getSingleUser)

router.route("/:userId")
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;