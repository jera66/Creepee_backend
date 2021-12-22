const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const PostModel = mongoose.model('PostModel')

router.post('/comment', (req, res) => {
  //  console.log(req.body.fullName)
  const { title, content } = req.body
  if (!title || !content) {
    return res.status(404).json({ error: 'Empty fields' })
  }
  //   console.log(req.userData)
  //   res.send('success')
  const postModel = new PostModel({
    title,
    content,
    author: req.userData
  })
  postModel
    .save()
    .then(dbPost => {
      res.json({ result: dbPost })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
