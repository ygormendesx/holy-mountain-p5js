if (mountainCount <= 50) {
    if (curveM <= 40) {
      formationMountain = 'Round Mountain '
  } else if (curveM > 40 && curveM < 80) {
      formationMountain = 'Pointed Mountain '
  } else {
      formationMountain = 'Ellipse Mountain'
  }
} else if (mountainCount > 50 &&  mountainCount <= 65) {
  formationMountain = 'Lonely Mountain '
} else if (mountainCount > 65 &&  mountainCount <= 78) {
  formationMountain = 'Columns Mountain'
} else if (mountainCount > 78 &&  mountainCount <= 88) {
  formationMountain = 'illuminated Mountain'
} else if (mountainCount > 88 &&  mountainCount <= 94) {
  formationMountain = 'Contour Mountain '
} else if (mountainCount > 94 &&  mountainCount <= 98) {
  formationMountain = 'Mountain Valley'
} else if (mountainCount > 98 &&  mountainCount <= 100) {
  formationMountain = 'Special Mountain '
}

if (element <= 50 && mountainCount < 97 || mountainCount > 50 && mountainCount < 65) {
  fogFeature = true
}

if (element > 80 && showComet > 30 &&(mountainCount < 50 || mountainCount > 65)) {
  cloudsFeature = true;
}

if (showComet < 30 && (Ycomet > yMoon-40 || Ycomet < yMoon+40)) {
  cometFeature = true
}

if (showMoon > 90) {
  moonFeature = true
}


window.$fxhashFeatures = {
  "Formation": formationMountain,
  "Color Palette": colorName,
  "Fog": fogFeature,
  "Clouds": cloudsFeature,
  "Comet": cometFeature,
  "Moon": moonFeature,
}

