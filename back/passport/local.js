const passport = require('passport')
const { Strategy:LocalStrategy } = require('passport-local')
const bcrypt = require('bcrypt')
const db = require('../models')
const Sequelize = require('sequelize')

module.exports = () => {
	passport.use('login',new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	}, async (email, password, done) => {
    try {
			const user = await db.User.findOne({ where: { email }})
			if(!user) {
				return done(null, false, { reason: 'Not Existing User'})
			}
			const result = await bcrypt.compare(password, user.password)
			if(result) {
				return done(null, user)
			}
			return done(null, false, { reason: 'Wrong Password' })
		} catch (error) {
			console.error(error)
			return done(error)
		}
  })),
  
	passport.use('join',new LocalStrategy({
		usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
	}, async (req, email, password, done) => {
    try {
			const user = await db.User.findOne({ where: {
				[Sequelize.Op.or]:[
				 {email : email},
				 {stdnum : req.body.stdnum}
				]}})
			if(user) {
				return done(null, false, { reason: 'already existing email or student number'})
			}
			const hashedpw = await bcrypt.hash(password,12);
			const new_user = await db.User.create({email:email, password : hashedpw, nickname: req.body.nickname, stdnum: req.body.stdnum, major:req.body.major })
			return done(null,new_user, null)

		} catch (error) {
			console.error(error)
			return done(error)
		}
	}))
}