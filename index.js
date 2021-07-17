import ColorConverter from './ColorConverter.js';
console.log(ColorConverter.colorsJSON);
window.ColorConverter = ColorConverter;

document.querySelector('.input-color').addEventListener('input', function () {
	let color = this.value.toColor();
	document.querySelector('.input-color-output').innerHTML = colorHTML(color);
});
let colorHTML = function (color) {
	if (color) {
		return `
    <table>
    <tr><th>Property</th><th>Value</th></tr>
    <tr><td>.name</td><td>${color.name}</td></tr>
    <tr><td>.rgb</td><td>${color.rgb}</td></tr>
    <tr><td>.rgba</td><td>${color.rgba}</td></tr>
    <tr><td>.hex</td><td>${color.hex}</td></tr>
    <tr><td>.hexa</td><td>${color.hexa}</td></tr>
    <tr><td>.hsl</td><td>${color.hsl}</td></tr>
    <tr><td>.hsla</td><td>${color.hsla}</td></tr>
    <tr><td>.r</td><td>${color.r}</td></tr>
    <tr><td>.g</td><td>${color.g}</td></tr>
    <tr><td>.b</td><td>${color.b}</td></tr>
    <tr><td>.a</td><td>${color.a}</td></tr>
    <tr><td>.h</td><td>${color.h}</td></tr>
    <tr><td>.s</td><td>${color.s}</td></tr>
    <tr><td>.l</td><td>${color.l}</td></tr>
    <tr><td>.str</td><td style="background-color:${color.hexa}">${color.str}</td></tr>
    </table>
    `;
	} else {
		return 'invalid color value';
	}
};
document.querySelector('.input-color-output').innerHTML = colorHTML(document.querySelector('.input-color').value.toColor());
let fillDDLColors = function () {
	document.querySelector('.ddl-color-names').innerHTML = Object.keys(ColorConverter.colorsJSON)
		.filter((x) => x[0] === '#')
		.sort((a, b) => (ColorConverter.colorsJSON[a] > ColorConverter.colorsJSON[b] ? 1 : -1))
		.reduce((res, next) => {
			return res + `<option value="${next}">${ColorConverter.colorsJSON[next]}</option>`;
		}, '');
};
fillDDLColors();
document.querySelector('.ddl-color-names').addEventListener('change', function () {
	let color = this.value.toColor();
	document.querySelector('.ddl-color-output').innerHTML = colorHTML(color);
});
document.querySelector('.ddl-color-output').innerHTML = colorHTML(document.querySelector('.ddl-color-names').value.toColor());
let timeOut = null;
document.querySelector('.input-text-color').addEventListener('input', function () {
	let _this = this;
	timeOut && window.clearTimeout(timeOut);
	timeOut = window.setTimeout(function () {
		let color = _this.value.toColor();
		document.querySelector('.text-color-output').innerHTML = colorHTML(color);
	}, 1000);
});
document.querySelector('.text-color-output').innerHTML = colorHTML(document.querySelector('.input-text-color').value.toColor());
