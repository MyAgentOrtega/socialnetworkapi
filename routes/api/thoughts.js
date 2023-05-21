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
      // find the thought, find the reaction, remove it from the reactions arr on the specific thought
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtsId },
        { $pull: { reactions: {_id: req.body.reactionId} } }
      );

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
