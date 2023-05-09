var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thoughts',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Users',
        },
      ],
},
{
    toJSON: {
      getters: true,
    },
  })
userSchema.virtual("friendCount").get(function(){
return this.friends.length;
})
  const Users = model("Users",userSchema)

  module.exports = Users;

