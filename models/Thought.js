const { Schema, model } = require('mongoose');
const reactionsSchema = require("./Reactions")
const dayjs = require('dayjs')
const thoughtsSchemas = new Schema({
    thoughtText: { 
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
    type: Date,
    default: Date.now(),
    get:timestamp=>dayjs().unix(timestamp).tz("UTC").format("YYYY-MM-DDTHH:mm:ss")
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionsSchema]
},{
    toJSON: {
        getters: true,
      },

  })
thoughtsSchemas.virtual("reactionCount").get(function(){
    return this.reactions.length;
    })
    const Thoughts = model("Thoughts", thoughtsSchemas)

    module.exports = Thoughts;
  