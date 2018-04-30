
var sites = require('./sites.json')

exports.api = function(type, type2) {
  var invalid = undefined
  if (type == "sites") {
    if (type2 == "size") {
      var length = Object.keys(sites).length;
      return length;
    }
  }
  return invalid;
}

// Blocked Sub-Domains:
// Already used subdomains.
// blank subdomain
// "www"
