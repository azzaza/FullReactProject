const { Router } = require('express')
const router = Router();
const User = require('../models/user')
const auto = require('../middleware/autification');
const hide_data = require('../help/user').hideDataUser
const bcrypt = require('bcryptjs');

router.post(
    '/settings',
    auto,
    async (req, res) => {
        try {
            // console.log(req.body);
            //!
            if (req?.body?.page_name) {
                const page_isUnic = await User.findOne({ page_name: req.body.page_name })
                if (page_isUnic) {
                    res.status(410).json({ message: 'Teg must be unic' })
                }
            }


            await User.updateMany({ _id: req.headers._id }, { $set: { ...req.body } })

            const user = await User.findOne({ _id: req.headers._id })
            const user_hide = hide_data(user)
            console.log(user_hide);
            //   await User.save()
            res.status(200).json({ message: 'good', user: user_hide })
        }
        catch (e) {
            console.log(e);
            res.status(501).json({ message: 'Error', data: e })
        }
    }
)
router.post(
    '/password',
    auto,
    async (req, res) => {
        try {
            const { password, new_password } = req.body;
            const user = await User.findOne({ _id: req.headers._id })
            const isCorect = await bcrypt.compare(password, user.password)
            console.log(isCorect);
            if (!isCorect) {
                res.status(408).json({ message: 'Incorect  password' })
            }
            const hashPassword = await bcrypt.hash(new_password, 12)
            await User.updateOne({ _id: req.headers._id }, { $set: { password: hashPassword } })
            res.status(200).json({ message: 'good' })
        }
        catch (e) {
            res.status(500).json({ message: 'Error' })
        }
    }
)

module.exports = router