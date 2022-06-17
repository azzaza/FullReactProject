const { Router } = require('express')
const router = Router();
const Users = require('../models/user')



router.get(
    '/get',
    async (req, res) => {
        try {
            const users = await Users.find({})




            if (!users) {
                return res.status(407).json({
                    message: 'Users not found'
                })
            }



      

            const find_value = req.query.find.toLowerCase()
      
            const filterUsers = users
                .filter(e => e.name.toLowerCase().includes(find_value))
                .map(e => ({
                        name: e.name,
                        page_name: e.page_name
                    }))
            res.status(201).json({ massage: 'win', users: filterUsers })


        }
        catch (e) {
            res.status(500).json({ massage: 'Error' })
        }
    }



)

module.exports = router

