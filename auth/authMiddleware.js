module.exports = (req, res, next) => {
    console.log('session', req.session.loggedIn);
    if(req.session.loggedIn) {
        next();
    } else {
        res.status(401).json({message: "cannot pass"})
    }
};