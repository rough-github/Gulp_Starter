const del = require('del');

const clean = () => del(["./public"]);

exports.clean = clean;
