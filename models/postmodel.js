const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    default: "No image url specified"
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel"
  }
})
mongoose.model('PostModel', postSchema)
