const { ValidName, ValidEmail, ValidPassword} = require('../validation/AllValidation')

exports.validUser = (req, res,next ) => {
    try {
        const data = req.body;
        const { name, email, password} = data;

        if (!name) return res.status(400).send({ status: false, msg: 'Pls Provided Name' })
        if (!ValidName(name)) return res.status(400).send({ status: false, msg: 'Invalid Name' })

        if (!email) return res.status(400).send({ status: false, msg: 'Pls Provide Email' })
        if (!ValidEmail(email)) return res.status(400).send({ status: false, msg: 'Invalid Email Address' })

        if (!password) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })
        if (!ValidPassword(password)) return res.status(400).send({ status: false, msg: 'Invalid Password' })  
            next()
    
    }
    catch (e) { return res.status(500).send({ status: false, msg: e.message }) }
}

exports.validUserLogIn = (req, res, next ) => {
    try {
        const data = req.body;
        const { email, password} = data;

        if (!email) return res.status(400).send({ status: false, msg: 'Pls Provide Email' })
        if (!ValidEmail(email)) return res.status(400).send({ status: false, msg: 'Invalid Email Address' })

        if (!password) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })
        if (!ValidPassword(password)) return res.status(400).send({ status: false, msg: 'Invalid Password' })

        next()
    
    }
    catch (e) { return res.status(500).send({ status: false, msg: e.message }) }
}