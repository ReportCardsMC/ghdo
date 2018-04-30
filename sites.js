exports.api = function(type, type2) {
  var invalid2 = "Invalid Type2"
  var invalid = "Invalid Type"
  if (type == "sites") {
    if (type2 == "size") {
      return sites.size;
    } else {
      return invalid2;
    }
  } else {
    return invalid;
  }
}

var sites = {
  "rileydatlord": "RileyDatLord/RileyDatLord.github.io",
  "raz": "Razod/ravioliweb"
}
// Blocked Sub-Domains:
// Already used subdomains.
// blank subdomain
// "www"
