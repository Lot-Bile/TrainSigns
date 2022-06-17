const mongoose = require('mongoose');

const signSchema = mongoose.Schema({
    name: String,
    description: String,
    img: {
        data: Buffer,
        contentType: String
    },
    static: Boolean,
    flashing: Boolean,
    flashingFast: Boolean,
    lightColor: String,
    yellowLine: Boolean,
    greenLineUp: Boolean,
    greenLineMid: Boolean,
    greenLineBoth: Boolean,
    white: Boolean,
    whiteFlashing: Boolean,
    yellowBot: Boolean,
});

module.exports = mongoose.model("signals", signSchema);