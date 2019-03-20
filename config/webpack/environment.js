const { environment } = require("@rails/webpacker");
const typescript = require("./loaders/typescript");
const sass = require("./loaders/sass");

environment.loaders.prepend("typescript", typescript);
environment.loaders.prepend("sass", sass);
environment.externals = ["foundation-sites"];

module.exports = environment;
