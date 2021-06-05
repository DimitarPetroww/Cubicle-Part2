module.exports = {
    GET: async (req, res) => {
        try {
            const cubes = await req.cubeStorage.getAll()
        
            res.render("index", { cubes })
        }catch(e) {
            res.render("index", { err: e.message })
        }
    }
}