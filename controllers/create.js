module.exports = {
    GET: (req, res) => {
        res.render("create")
    },
    POST: async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageURL: req.body.imageURL,
            difficulty: Number(req.body.difficulty)
        }
        try {
            await req.cubeStorage.create(cube)

            res.redirect("/")
        }catch(e) {
            res.render("create", {error: e.message})
        }
    }
}