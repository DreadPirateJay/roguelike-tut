'use strict';

var Game = {
	_display: null,
	_currentScreen: null,

	init: function () {
		this._display = new ROT.Display({ width: 80, height: 24 });

		var game = this;
		var bindEventToScreen = function (event) {
			window.addEventListener(event, function (e) {
				if (game._currentScreen !== null) {
					game._currentScreen.handleInput(event, e);
				}
			});
		}
		bindEventToScreen('keyup');
		bindEventToScreen('keydown');
		bindEventToScreen('keypress');
	},

	getDisplay: function () {
		return this._display;
	},

	switchScreen: function (screen) {
		if (this._currentScreen !== null) {
			this._currentScreen.exit();
		}

		this.getDisplay().clear();
		this._currentScreen = screen;

		if (this._currentScreen !== null) {
			this._currentScreen.enter();
			this._currentScreen.render(this._display);
		}
	}
};

window.onload = function () {
	if (!ROT.isSupported) {
		alert('The rot.js library is not supported by your browser.');
	} else {
		Game.init();
		document.body.appendChild(Game.getDisplay().getContainer());
		Game.switchScreen(Game.Screen.startScreen);
	}
};