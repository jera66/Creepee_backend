const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
 const UserModel = mongoose.model('UserModel')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const req = require('express/lib/request')
const {JWT_SECRET_KEY} = process.env


router.get('/home', (req, res) => {
  res.send('Home sweet home!')
})
router.post('/register', (req, res) => {
  //  console.log(req.body.fullName)
  const { fullName, email, password } = req.body
  if (!fullName || !email || !password) {
    return res.status(404).json({ error: 'Empty fields' })
  }
  UserModel.findOne({ email: email })
    .then(dbUser => {
      if (dbUser) {
        return res.status(404).json({ error: 'User already exists' })
      }
      bcrypt.hash(password, 14).then(psswd => {
        const userData = new UserModel({
          fullName,
          email,
          password: psswd
        })
        userData
          .save()
          .then(result => {
            res.status(404).json({ result: 'User registration successful' })
          })
          .catch(err => {
            console.log(err)
          })
      })
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/login', (req, res) => {
  //  console.log(req.body.fullName)
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(404).json({ error: 'Empty fields' })
  }
  UserModel.findOne({ email: email })
    .then(dbUser => {
      bcrypt.compare(password, dbUser.password)
      .then(matched => {
        if (matched) {
            res.json({ result: 'Login successful!'})
        }else {
            return res.status(404).json({ error: 'Invalid credentials' })

        }
      }).catch(err => {
      console.log(err)
    })
    })
    .catch(err => {
      console.log(err)
    })
})



module.exports = router
