module.exports = {
    GET: async (req, res) => {
        try {
            const cubes = await req.cubeStorage.getAll()
        
            res.render("index", { cubes })
        }catch(e) {
            console.log(e.message);
            res.render("index", { err: e.message })
        }
    }
}