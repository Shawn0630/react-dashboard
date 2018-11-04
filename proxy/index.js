const noProxy = process.env.NO_PROXY === "true";

const proxy = {};

module.exports = (noProxy ? {} : proxy);