const {Router} = require('express');
const authRouter = Router();
const cors = require('cors')
authRouter.use(cors())
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const {ExtractJWT, Strategy: JWTStrategy} = require('passport-jwt')
const {Signup, SearchByuser, SearchById} = require('../queries')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'honey'
}

passport.use(
    new LocalStrategy(
        {usernameField: 'email', passwordField: 'password'},
   async (email, password, done) => {
    try {
           const User = await SearchByuser(email)
           const userpassword = User.password
           
     if (!User) {
    return done(null, false, {message: "Invalid Email"})
     } 
     const pass = await bcrypt.compare(password, userpassword)
     if (!pass) {
        return done(null, false, {message: "Invalid Password"})
     }
       return done(null, User)
     

    } catch(err) {
        console.log(err.message)
        return done(err)
        }}
    )
)

passport.use(
    new JWTStrategy(opts, async (payload, done)=> {
        try {
            const user = await SearchById(payload.id)
            return done(null, user)
        } catch(err) {
            return done(err)}}))





authRouter.post('/signup', async (req, res)=>{
try {
    const hashedpassword = await bcrypt.hash(req.body.password)
await Signup(req.body.email, hashedpassword, 10)
return res.status(201).json({message: "user created"})
} catch(err) {
    res.status(401).json({message: err.message})
}})


authRouter.post('/login', (req, res)=>{
    passport.authenticate('local', {session: false}, (err, user)=> {
        if (err || !user) { return res.status(400).json({message: "login failed"})}
        req.login(user, {session:false}, (err)=> {
            if (err) return res.send(err)
                const token = jwt.sign({id:user.id}, 'honey')
            return res.json({token, user})
        })
    })
})
const VerifyToken = passport.authenticate('jwt', { session: false });


module.exports = {authRouter, VerifyToken};