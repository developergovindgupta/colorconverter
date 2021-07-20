# ColorConverter.toColor()

## How to use...

[download ColorConverter.js](https://raw.githubusercontent.com/developergovindgupta/colorconverter/main/ColorConverter.js)

[download ColorConverter.min.js](https://raw.githubusercontent.com/developergovindgupta/colorconverter/main/ColorConverter.min.js)

[gitHub link - download sourcecode](https://github.com/developergovindgupta/colorconverter)

[npm install string-color-converter](https://www.npmjs.com/package/string-color-converter)

html - js

    import ColorConverter from "./ColorConverter.js";

node:

    const ColorConverter = require('string-color-converter');
    
syntax : 

    ColorConverter.toColor( strColorValue )

    strColorValue .toColor()

output : 

    returns object having following read-only properties



| Property|	Description|
|--|--|
|.name|	Name of color defined in css3|
|.rgb|	String rgb color value|
|.rgba|	String rgba color value|
|.hex|	String Hexa code of color|
|.hexa|	String Hexa code of color with alpha value|
|.hsl|	String HSL color|
|.hsla|	String HSL color with alpha value|
|.r|	Numeric Red Value|
|.g|	Numeric Green Value|
|.b|	Numeric Blue Value|
|.a|	Numeric Alpha Value Floating Point|
|.h|	Numeric Hue Value|
|.s|	Numeric Saturation Value|
|.l|	Numeric Lightness Value|
|.str|	String that is passed for conversion of color|

## Examples...

 

    1. "red".toColor().rgba
        Output:rgba(255, 0, 0, 1)



 
    2. "#FFCCDD".toColor().rgba
        Output:rgba(255, 204, 221, 1)



    3. "rgb(255, 255, 0)".toColor().hsl
        Output:hsl(60, 100%, 50%)


#   




## License : Free to use