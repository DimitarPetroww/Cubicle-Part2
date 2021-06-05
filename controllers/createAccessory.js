module.exports = {
    GET: (req, res) => {
        res.render("createAccessory")
    },
    POST: async (req, res) => {
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageURL: req.body.imageURL,
        }
        try {
            await req.accessoryStorage.create(accessory)

            res.redirect("/")
        }catch(e) {
            res.render("createAccessory", {error: e.message})
        }
    }
}