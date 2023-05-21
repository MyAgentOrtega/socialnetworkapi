const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  createThought,
} = require("../../controllers/thoughtControllers");
const { Thought } = require("../../models");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtsId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:thoughtsId/reactions")
  .post(async function (req, res) {
    try {
      // getting the reaction from the request body
      const reaction = req.body;

      // associate that reaction with the appropriate thought
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtsId },
        { $push: { reactions: reaction } }
      );

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  .delete(async function (req, res) {
    try {
    } catch (error) {}
  });

module.exports = router;
