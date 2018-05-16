
var sites = require('./sites.json')

var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};
exports.api = function(type, type2) {
  var invalid = undefined
  if (type == "sites") {
    if (type2 == "size") {
      var length = Object.keys(sites).length;
      return length;
    }
    if (type2 == "names") {
      return JSON.stringify(sites);
    }
    if (type2 == "random") {
      return randomProperty(sites);
    }
  }
  return invalid;
}

// Blocked Sub-Domains:
// Already used subdomains.
// blank subdomain
// "www"
