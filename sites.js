
var sites = {
  "rileydatlord": "RileyDatLord/RileyDatLord.github.io",
  "raz": "Razod/ravioliweb"
}

exports.api = function(type, type2) {
  var invalid = undefined
  if (type == "sites") {
    if (type2 == "size") 
      var length = Object.keys(sites).length;
      return length;
    } else {
      return invalid;
    }
  } else {
    return invalid;
  }
}

// Blocked Sub-Domains:
// Already used subdomains.
// blank subdomain
// "www"
