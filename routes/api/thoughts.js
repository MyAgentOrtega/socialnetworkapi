const router = require('express').Router();
const {
getThoughts,
getSingleThought,
updateThought,
deleteThought,
createThought
} = require('../../controllers/thoughtControllers');


router.route('/').get(getThoughts).post(createThought);

router.route("/:thoughtsId")
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);


module.exports = router;