module.exports = {
    GET: async (req, res) => {
        try {
            let options = {}
            if(req.query.search) {
                options = { name: new RegExp(req.query.search, "i")}
            }if(req.query.from) {
                options.difficulty = { $gte: Number(req.query.from) }
            }if(req.query.to) {
                options.difficulty = options.age || {}
                options.difficulty.$lte = Number(req.query.to)
            }

            console.log(options);
            const cubes = await req.cubeStorage.getAll(options)
            res.render("index", { cubes })
        }catch(e) {
            res.render("index", { err: e.message })
        }
    }
}