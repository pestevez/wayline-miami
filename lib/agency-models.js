const config = require('@wayline/config')

const miami = {
  name: 'Miami-Dade Transit',
  entityGenerateAsync: require('../functions/gen-mdt-feed'),
  gtfsURL: config.GTFSPlaces.MiamiDadeTransit
}

const trirail = {
  name: 'Tri-Rail/SFRTA',
  entityGenerateAsync: require('../functions/gen-trirail-feed'),
  gtfsURL: config.GTFSPlaces.SFRTATriRail
}

module.exports = {
  miami,
  // trirail
}
