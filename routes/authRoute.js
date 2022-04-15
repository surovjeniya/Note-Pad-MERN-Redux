const {Router} = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {check,validationResult} = require('express-validator')
const User = require('../models/User')
const config = require('config')

router.post('/registration',
    [
        check('email','Incorrect email').isEmail(),
        check('password','Password should be longer').isLength({min:6})
    ],
    async (req,res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                message:'Registration error',
                error:errors.array()
            })
        }

        const {email,password,login} = req.body

        const candidateUser = await User.findOne({login})
        const cadidateEmail = await User.findOne({email})

        if(candidateUser || cadidateEmail) {
            return res.status(400).json({
                error:'This user already registered'
            })
        }
        
        const user = await new User({
            email,
            password:await bcrypt.hash(password,15),
            login
        })

        await user.save()

        res.status(201).json({
            message:'Registration succes'
        })


    } catch(e) {
        res.status(500).json({
            message:'Registration error',
            error:e.message
        })
    }
})

router.post('/login',
    [
        check('email','Incorrect email').isEmail(),
        check('password','Password should be longer').isLength({min:6})
    ],
    async (req,res) => {
    try {

        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                message:'Login error',
                error:errors.array()
            })
        }

        const {email,password} = req.body
        
        const candidate = await User.findOne({email})

        if(!candidate) {
            return res.status(400).json({
                error:'This user not registered'
            })
        }

        const isPassword = await bcrypt.compare(password,candidate.password)

        if(!isPassword) {
            return res.status(400).json({
                error:'Incorrect password'
            })
        }

        const jToken = jwt.sign(
            {userID:candidate._id},
            config.get('jwtSecret'),
            {expiresIn:'1h'}
        )

        res.status(200).json({
            message:'login succes',
            userID:candidate._id,
            token:jToken
        })
        

    } catch(e) {
        res.status(500).json({
            message:'Registration error',
            error:e.message
        })
    }
})


module.exports = router;