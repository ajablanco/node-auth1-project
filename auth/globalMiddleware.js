module.exports = (req, res, next) => {
    console.log('session', req.session.loggedIn);

    if(req.session && req.session.loggedIn) {
        next();
    } else {
        res.status(401).json({message: "sorry, but you must log in to view this data"})
    }
};