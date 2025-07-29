import colorconvert from "./colorconvert";

export default {
  saturate: function (color, percent) {
    let hsl = colorconvert.HexToHSL(color);
    hsl[1] = percent;
    return colorconvert.HSLToHex(hsl[0], hsl[1], hsl[2]);
  },
  lighten: function (color, percent) {
    let hsl = colorconvert.HexToHSL(color);
    hsl[2] = percent;
    return colorconvert.HSLToHex(hsl[0], hsl[1], hsl[2]);
  },
  mix: function (color1, color2, ratio) {
 
    const rgbA = colorconvert.hexToRGB(color1);
    const rgbB = colorconvert.hexToRGB(color2);
    ratio = ratio / 100

    if (rgbA && rgbB) {
      var r = colorChannelMixer(rgbA[0], rgbB[0], ratio);
      var g = colorChannelMixer(rgbA[1], rgbB[1], ratio);
      var b = colorChannelMixer(rgbA[2], rgbB[2], ratio);
     // console.log(r, g, b);
      
      return colorconvert.RGBToHex(r, g, b);
    }
    return '#ffffff'
  },

  rotatehue: function (color, percent) {
    let hsl = colorconvert.HexToHSL(color);
    hsl[0] =+ percent;
    return colorconvert.HSLToHex(hsl[0], hsl[1], hsl[2]);
  },
};

function colorChannelMixer(colorChannelA, colorChannelB, ratio) {
  var channelA = colorChannelA * ratio;
  var channelB = colorChannelB * (1 - ratio);
  return parseInt(channelA + channelB);
}
