module.exports = {
    GET: async (req, res) => {
        try {
            const cube = await req.cubeStorage.getOne(req.params.id)
            const accessories = await req.accessoryStorage.getAll()

            res.render("attachAccessory", { cube, accessories })
        } catch (e) {
            res.redirect("404")
        }
    },
    POST: async (req, res) => {
        const accessoryID = req.body.accessory
        const cubeID = req.params.id

        try {
            await req.accessoryStorage.attach(cubeID, accessoryID)

            res.redirect("/cube/details/" + cubeID)
        }catch(e) {
            res.render("attachAccessory", {error: e.message})
        }
    }
}