const { Schema, model} = require("mongoose")

const schema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true, minLength: 10},
    imageURL: { type: String, required: true, match: /^https?/},
    difficulty: { type: Number, required: true, min: 1, max: 6}
})

module.exports = model("Cube", schema)