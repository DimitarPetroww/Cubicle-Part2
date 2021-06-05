module.exports = {
    GET: async (req, res) => {
        try {
            const cube = await req.cubeStorage.getOne(req.params.id)
            res.render("details", { cube })
        }catch(e) {
            res.redirect("404")
        }
    },

}