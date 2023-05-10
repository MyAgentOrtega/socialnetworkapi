const { Schema, model } = require('mongoose');
const dayjs = require('dayjs')
const reactionSchema= new Schema (
    {
        reactionId:{
            type: Schema.Types.ObjectId,
            default: ()=> Types.ObjectId(),

        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get:timestamp=>dayjs().unix(timestamp).tz("UTC").format("YYYY-MM-DDTHH:mm:ss")
        }
    },
    {
        toJSON: {
            getters: true,
          },
    
    }
)
module.exports =reactionSchema
