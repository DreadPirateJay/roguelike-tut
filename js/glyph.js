'use strict';

Game.Glyph = function (chr, foreground, background) {
	this._chr = chr || ' ';
	this._foreground = foreground || 'white';
	this._background = background || 'black';
};

Game.Glyph.prototype.getChr = function () {
	return this._chr;
}

Game.Glyph.prototype.getForeground = function () {
	return this._foreground;
}

Game.Glyph.prototype.getBackground = function () {
	return this._background;
}