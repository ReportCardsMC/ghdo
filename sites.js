
var sites = require('https://raw.githubusercontent.com/RileyDatLord/ghdo/master/sites.json')

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
  }
  return invalid;
}

// Blocked Sub-Domains:
// Already used subdomains.
// blank subdomain
// "www"
