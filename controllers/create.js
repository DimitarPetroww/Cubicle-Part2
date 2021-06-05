module.exports = {
    GET: (req, res) => {
        res.render("create")
    },
    POST: (req, res) => {
        console.log(req.body);
    }
}