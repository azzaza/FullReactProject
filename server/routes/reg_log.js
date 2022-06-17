const { Router } = require('express')
const router = Router();
const User = require('../models/user')
const { body, validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config');
const auto = require('../middleware/autification');
// const User = require('../models/user');
//reg/log



router.post(
    '/register',

    async (req, res) => {
        // console.log('____________________');
        // console.log(req.body);
        // console.log('____________________');
        try {
            
            const { email, name, password } = req.body
            body('email').isEmail()
            body('password').isLength({ min: 5 })
            body('name').isLength({ min: 3, max: 10 })
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            console.log(1);
            const newUser = await User.findOne({ email })
           const page_name =( await (await User.find({})).length ) + ''
            // console.log(page_name);
            if (newUser) {
                return res.status(405).json({
                    message: 'User with this email is  alredy created'
                })
            }
            const hashPassword = await bcrypt.hash(password, 12)
            const user = new User({
                email,
                password: hashPassword,
                name,
                page_name 
            })

            await user.save()

            res.status(201).json({ massage: 'win' })
            
        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
        



    })

router.post(
    '/log-in',
    [
        check('email', 'not email').isEmail(),
        check('password', 'not password').isLength({ min: 5 })
    ],
    async (req, res) => {
        try {

            const { email, password } = req.body
            const errors = validationResult(req)


            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'errors'
                })
            }

            // body('email').isEmail()
            // body('password').isLength({ min: 5 })
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }


            const user = await User.findOne({ email })

            if (!user) {
                return res.status(404).json({
                    message: 'User not find '
                })
            }


            const hashPassword = await bcrypt.compare(password, user.password)

            if (!hashPassword) {
                return res.status(400).json({
                    message: 'incorect password'
                })
            }

            const jwtToken = jwt.sign(
                { userId: user._id }, //_id,
                config.get('slovo'),
                { expiresIn: '5h' }
            )
                
            user.password = null
            res.status(201).json({ massage: 'win', jwtToken,user})

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }




    })
    router.get(
        '/autorisation',
        auto,
        async (req, res) => {
            try {
            // console.log(auto);

        const token = req.headers.autorization;
          
         const dataUser = await jwt.verify(token,config.get('slovo'),(err,ans)=>({err,ans}))
        // console.log(dataUser.err);
         if(dataUser.err) return res.status(400).json({
             message : 'token not life'
         })

      

            const user = await User.findOne({_id :  dataUser.ans.userId })

            if (!user) {
                return res.status(404).json({
                    message: 'User not find '
                })
            }
            user.password = null
          
           
            res.status(201).json({ massage: 'win', user })

        } catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
)





module.exports = router