export default [
  /* 0 */ {
    layers: ['google-3d'],
    view: {latitude: 50.081033020810736, longitude: 14.451093643141064, bearing: 0, pitch: 40, zoom: 17, height: 400},
    orbit: true
  },
  /* 1 */ {
    layers: ['google-3d'],
    view: {latitude: 50.10650491896325, longitude: 14.417186789690248, bearing: 80, pitch: 70, zoom: 17.5, height: 200},
    orbit: true
  },
  /* 2 */ {
    layers: ['google-3d', 'temperature'],
    view: {latitude: 50.094310100945165, longitude: 14.428403524611161, bearing: 7.919687982872942, pitch: 27.029786864591166, zoom: 12.113912734993061, height: 221.10726674564285}
  },
  /* 3 */ {
    layers: ['google-3d', 'mijq2d'], // Top priority Buildings
    view: {latitude: 50.098638970057976, longitude: 14.430949347805848, bearing: -58.668795330078694, pitch: 58.268384344242605, zoom: 15.751310628564266, height: 210},
    orbit: true
  },
  /* 4 */ {
    layers: ['google-3d', 'mtcqiik'], // Tree Planting Priority
    view: {latitude: 50.08982364563372, longitude: 14.476247593416911, bearing: -53.76372618207482, pitch: 43.14705882352941, zoom: 12.601748373210508, height: 250}
  }
];
